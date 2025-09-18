import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { locations, LocationInfo } from '@/data/locations';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

// Boulder County coordinates for each city
const locationCoordinates: Record<string, [number, number]> = {
  boulder: [-105.2705, 40.0150],
  longmont: [-105.1019, 40.1672], 
  louisville: [-105.1317, 39.9778],
  lafayette: [-105.0894, 39.9936],
  superior: [-105.1686, 39.9528],
  broomfield: [-105.0867, 39.9205],
  erie: [-105.0498, 40.0502],
  niwot: [-105.1661, 40.0956],
  gunbarrel: [-105.2094, 40.0697]
};

// City names for boundary lookup
const cityNames: Record<string, string> = {
  boulder: 'Boulder',
  longmont: 'Longmont',
  louisville: 'Louisville', 
  lafayette: 'Lafayette',
  superior: 'Superior',
  broomfield: 'Broomfield',
  erie: 'Erie',
  niwot: 'Niwot',
  gunbarrel: 'Gunbarrel'
};

const ServiceAreasMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken] = useState('pk.eyJ1Ijoic3NoZWtvdSIsImEiOiJjbWZwcDFycGswOTNkMmpwbXcxdXltOHdhIn0.cvbUOhH0VSpUWBD04p2XbA');
  const [mapInitialized, setMapInitialized] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState<LocationInfo | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const navigate = useNavigate();

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [-105.1317, 40.0150], // Centered on Boulder County
      zoom: 10,
      pitch: 0,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    map.current.on('load', () => {
      addServiceAreaPolygons();
      addLocationMarkers();
      setMapInitialized(true);
    });
  };

  const addServiceAreaPolygons = async () => {
    if (!map.current) return;
    
    // Use manual polygons since Mapbox boundaries API is not working
    addFallbackPolygons();
  };

  const addFallbackPolygons = () => {
    // Manual boundaries for all service areas
    const fallbackBoundaries: Record<string, number[][][]> = {
      boulder: [[
        [-105.3050, 40.0941],
        [-105.2987, 40.0712],
        [-105.2654, 40.0589],
        [-105.2398, 40.0478],
        [-105.2289, 40.0234],
        [-105.2156, 39.9987],
        [-105.2234, 39.9876],
        [-105.2445, 39.9823],
        [-105.2767, 39.9745],
        [-105.2934, 39.9834],
        [-105.3087, 39.9923],
        [-105.3145, 40.0123],
        [-105.3198, 40.0345],
        [-105.3167, 40.0567],
        [-105.3121, 40.0789],
        [-105.3050, 40.0941]
      ]],
      longmont: [[
        [-105.1419, 40.2072],
        [-105.0619, 40.2072],
        [-105.0619, 40.1272],
        [-105.1419, 40.1272],
        [-105.1419, 40.2072]
      ]],
      louisville: [[
        [-105.1717, 39.9978],
        [-105.0917, 39.9978],
        [-105.0917, 39.9578],
        [-105.1717, 39.9578],
        [-105.1717, 39.9978]
      ]],
      lafayette: [[
        [-105.1294, 40.0136],
        [-105.0494, 40.0136],
        [-105.0494, 39.9736],
        [-105.1294, 39.9736],
        [-105.1294, 40.0136]
      ]],
      superior: [[
        [-105.2086, 39.9728],
        [-105.1286, 39.9728],
        [-105.1286, 39.9328],
        [-105.2086, 39.9328],
        [-105.2086, 39.9728]
      ]],
      broomfield: [[
        [-105.1267, 39.9405],
        [-105.0467, 39.9405],
        [-105.0467, 39.9005],
        [-105.1267, 39.9005],
        [-105.1267, 39.9405]
      ]],
      erie: [[
        [-105.0898, 40.0702],
        [-105.0098, 40.0702],
        [-105.0098, 40.0302],
        [-105.0898, 40.0302],
        [-105.0898, 40.0702]
      ]],
      niwot: [[
        [-105.2061, 40.1156],
        [-105.1261, 40.1156],
        [-105.1261, 40.0756],
        [-105.2061, 40.0756],
        [-105.2061, 40.1156]
      ]],
      gunbarrel: [[
        [-105.2494, 40.0897],
        [-105.1694, 40.0897],
        [-105.1694, 40.0497],
        [-105.2494, 40.0497],
        [-105.2494, 40.0897]
      ]]
    };

    locations.forEach((location) => {
      const boundaries = fallbackBoundaries[location.slug];
      if (!boundaries) return;

      map.current!.addSource(`${location.slug}-area`, {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {
            slug: location.slug,
            name: location.name
          },
          geometry: {
            type: 'Polygon',
            coordinates: boundaries
          }
        }
      });

      map.current!.addLayer({
        id: `${location.slug}-fill`,
        type: 'fill',
        source: `${location.slug}-area`,
        paint: {
          'fill-color': '#ff6b6b',
          'fill-opacity': 0.3
        }
      });

      map.current!.addLayer({
        id: `${location.slug}-border`,
        type: 'line',
        source: `${location.slug}-area`,
        paint: {
          'line-color': '#ff4757',
          'line-width': 2,
          'line-opacity': 0.8
        }
      });

      // Add hover effects
      map.current!.on('mouseenter', `${location.slug}-fill`, () => {
        map.current!.getCanvas().style.cursor = 'pointer';
      });

      map.current!.on('mouseleave', `${location.slug}-fill`, () => {
        map.current!.getCanvas().style.cursor = '';
      });

      // Add click handler
      map.current!.on('click', `${location.slug}-fill`, () => {
        navigate(`/service-areas/${location.slug}`);
      });
    });
  };

  const addLocationMarkers = () => {
    if (!map.current) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    locations.forEach((location) => {
      const coords = locationCoordinates[location.slug];
      if (!coords) return;

      // Create marker element
      const markerEl = document.createElement('div');
      markerEl.className = 'marker';
      markerEl.style.cssText = `
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: hsl(var(--primary));
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        cursor: pointer;
        transition: all 0.2s ease;
      `;

      // Add hover effects
      markerEl.addEventListener('mouseenter', (e) => {
        markerEl.style.transform = 'scale(1.3)';
        markerEl.style.background = 'hsl(var(--primary-foreground))';
        setHoveredLocation(location);
        
        // Get position relative to map container
        const mapRect = mapContainer.current?.getBoundingClientRect();
        if (mapRect) {
          setMousePosition({ 
            x: e.clientX - mapRect.left, 
            y: e.clientY - mapRect.top 
          });
        }
      });

      markerEl.addEventListener('mouseleave', () => {
        markerEl.style.transform = 'scale(1)';
        markerEl.style.background = 'hsl(var(--primary))';
        setHoveredLocation(null);
      });

      markerEl.addEventListener('mousemove', (e) => {
        // Get position relative to map container
        const mapRect = mapContainer.current?.getBoundingClientRect();
        if (mapRect) {
          setMousePosition({ 
            x: e.clientX - mapRect.left, 
            y: e.clientY - mapRect.top 
          });
        }
      });

      // Add click handler
      markerEl.addEventListener('click', () => {
        navigate(`/service-areas/${location.slug}`);
      });

      // Create and add marker
      const marker = new mapboxgl.Marker(markerEl)
        .setLngLat(coords)
        .addTo(map.current!);

      markersRef.current.push(marker);
    });
  };

  useEffect(() => {
    initializeMap();
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Hover tooltip */}
      {hoveredLocation && (
        <Card
          className="absolute pointer-events-none z-10 p-4 min-w-64 max-w-80 shadow-lg bg-white/95 backdrop-blur-sm"
          style={{
            left: Math.min(Math.max(mousePosition.x + 10, 10), 320),
            top: Math.min(Math.max(mousePosition.y - 80, 10), 500),
          }}
        >
          <h4 className="font-semibold text-lg">{hoveredLocation.name}</h4>
          <p className="text-sm text-muted-foreground mb-2">{hoveredLocation.overview}</p>
          <p className="text-sm font-medium">Example rent: {hoveredLocation.exampleRent}</p>
        </Card>
      )}
      
      {!mapInitialized && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Loading map...</p>
        </div>
      )}
    </div>
  );
};

export default ServiceAreasMap;
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

    try {
      // Add Mapbox administrative boundaries tileset as source
      map.current.addSource('admin-boundaries', {
        type: 'vector',
        url: 'mapbox://mapbox.boundaries-adm-v3'
      });

      // Add layer for administrative boundaries
      map.current.addLayer({
        id: 'admin-fill',
        type: 'fill',
        source: 'admin-boundaries',
        'source-layer': 'boundaries_admin_3',
        filter: [
          'all',
          ['==', 'admin_level', 8], // City level
          ['==', 'iso_3166_1', 'US'],
          ['==', 'iso_3166_2', 'US-CO'],
          ['in', 'name', ...Object.values(cityNames)]
        ],
        paint: {
          'fill-color': '#ff6b6b',
          'fill-opacity': 0.3
        }
      });

      // Add border layer
      map.current.addLayer({
        id: 'admin-border',
        type: 'line',
        source: 'admin-boundaries',
        'source-layer': 'boundaries_admin_3',
        filter: [
          'all',
          ['==', 'admin_level', 8],
          ['==', 'iso_3166_1', 'US'],
          ['==', 'iso_3166_2', 'US-CO'],
          ['in', 'name', ...Object.values(cityNames)]
        ],
        paint: {
          'line-color': '#ff4757',
          'line-width': 2,
          'line-opacity': 0.8
        }
      });

      // Add hover effects
      map.current.on('mouseenter', 'admin-fill', (e) => {
        map.current!.getCanvas().style.cursor = 'pointer';
        
        // Highlight hovered feature
        if (e.features && e.features[0]) {
          map.current!.setFilter('admin-fill', [
            'all',
            ['==', 'admin_level', 8],
            ['==', 'iso_3166_1', 'US'], 
            ['==', 'iso_3166_2', 'US-CO'],
            ['in', 'name', ...Object.values(cityNames)],
            ['!=', ['get', 'name'], e.features[0].properties?.name]
          ]);
          
          map.current!.addLayer({
            id: 'admin-fill-hover',
            type: 'fill',
            source: 'admin-boundaries',
            'source-layer': 'boundaries_admin_3',
            filter: ['==', 'name', e.features[0].properties?.name],
            paint: {
              'fill-color': '#ff6b6b',
              'fill-opacity': 0.5
            }
          });
        }
      });

      map.current.on('mouseleave', 'admin-fill', () => {
        map.current!.getCanvas().style.cursor = '';
        
        // Remove hover layer and restore original filter
        if (map.current!.getLayer('admin-fill-hover')) {
          map.current!.removeLayer('admin-fill-hover');
        }
        
        map.current!.setFilter('admin-fill', [
          'all',
          ['==', 'admin_level', 8],
          ['==', 'iso_3166_1', 'US'],
          ['==', 'iso_3166_2', 'US-CO'],
          ['in', 'name', ...Object.values(cityNames)]
        ]);
      });

      // Add click handler
      map.current.on('click', 'admin-fill', (e) => {
        if (e.features && e.features[0]) {
          const cityName = e.features[0].properties?.name;
          const location = locations.find(loc => cityNames[loc.slug] === cityName);
          if (location) {
            navigate(`/service-areas/${location.slug}`);
          }
        }
      });

    } catch (error) {
      console.error('Error loading administrative boundaries:', error);
      // Fallback to manual polygons if boundaries fail
      addFallbackPolygons();
    }
  };

  const addFallbackPolygons = () => {
    // Fallback to original manual boundaries if Mapbox boundaries fail
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
      ]]
      // Add other fallback boundaries as needed
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
            left: Math.min(Math.max(mousePosition.x - 128, 16), window.innerWidth - 336),
            top: Math.max(mousePosition.y - 120, 16),
            transform: mousePosition.x > window.innerWidth / 2 ? 'translateX(-100%)' : 'translateX(0)',
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
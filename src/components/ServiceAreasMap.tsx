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

// Service area boundary polygons (more accurate city boundaries)
const locationBoundaries: Record<string, number[][][]> = {
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
    [-105.1456, 40.2134],
    [-105.1234, 40.2089],
    [-105.0987, 40.2012],
    [-105.0765, 40.1934],
    [-105.0543, 40.1823],
    [-105.0456, 40.1645],
    [-105.0398, 40.1456],
    [-105.0387, 40.1234],
    [-105.0445, 40.1023],
    [-105.0567, 40.0834],
    [-105.0789, 40.0756],
    [-105.1012, 40.0723],
    [-105.1234, 40.0789],
    [-105.1456, 40.0891],
    [-105.1567, 40.1023],
    [-105.1623, 40.1234],
    [-105.1589, 40.1456],
    [-105.1534, 40.1678],
    [-105.1489, 40.1901],
    [-105.1456, 40.2134]
  ]],
  louisville: [[
    [-105.1789, 40.0234],
    [-105.1645, 40.0189],
    [-105.1456, 40.0134],
    [-105.1234, 40.0089],
    [-105.1012, 40.0034],
    [-105.0834, 39.9989],
    [-105.0789, 39.9834],
    [-105.0823, 39.9678],
    [-105.0891, 39.9523],
    [-105.0989, 39.9389],
    [-105.1123, 39.9323],
    [-105.1289, 39.9289],
    [-105.1456, 39.9323],
    [-105.1623, 39.9389],
    [-105.1734, 39.9523],
    [-105.1801, 39.9678],
    [-105.1823, 39.9834],
    [-105.1801, 39.9989],
    [-105.1789, 40.0234]
  ]],
  lafayette: [[
    [-105.1389, 40.0423],
    [-105.1234, 40.0389],
    [-105.1089, 40.0334],
    [-105.0923, 40.0289],
    [-105.0789, 40.0234],
    [-105.0678, 40.0178],
    [-105.0567, 40.0089],
    [-105.0456, 39.9989],
    [-105.0423, 39.9834],
    [-105.0456, 39.9678],
    [-105.0523, 39.9523],
    [-105.0634, 39.9389],
    [-105.0789, 39.9323],
    [-105.0956, 39.9289],
    [-105.1123, 39.9323],
    [-105.1289, 39.9389],
    [-105.1423, 39.9523],
    [-105.1489, 39.9678],
    [-105.1512, 39.9834],
    [-105.1489, 39.9989],
    [-105.1456, 40.0134],
    [-105.1423, 40.0289],
    [-105.1389, 40.0423]
  ]],
  superior: [[
    [-105.2156, 40.0123],
    [-105.2012, 40.0089],
    [-105.1867, 40.0034],
    [-105.1723, 39.9989],
    [-105.1589, 39.9934],
    [-105.1456, 39.9878],
    [-105.1334, 39.9823],
    [-105.1234, 39.9756],
    [-105.1156, 39.9678],
    [-105.1089, 39.9589],
    [-105.1056, 39.9489],
    [-105.1089, 39.9389],
    [-105.1156, 39.9289],
    [-105.1234, 39.9201],
    [-105.1334, 39.9134],
    [-105.1456, 39.9089],
    [-105.1589, 39.9056],
    [-105.1723, 39.9089],
    [-105.1867, 39.9134],
    [-105.2012, 39.9201],
    [-105.2123, 39.9289],
    [-105.2189, 39.9389],
    [-105.2223, 39.9489],
    [-105.2189, 39.9589],
    [-105.2156, 39.9678],
    [-105.2123, 39.9756],
    [-105.2089, 39.9834],
    [-105.2123, 39.9912],
    [-105.2156, 40.0123]
  ]],
  broomfield: [[
    [-105.1389, 39.9723],
    [-105.1234, 39.9689],
    [-105.1089, 39.9634],
    [-105.0923, 39.9589],
    [-105.0789, 39.9534],
    [-105.0678, 39.9478],
    [-105.0567, 39.9389],
    [-105.0456, 39.9289],
    [-105.0423, 39.9134],
    [-105.0456, 39.8978],
    [-105.0523, 39.8823],
    [-105.0634, 39.8689],
    [-105.0789, 39.8623],
    [-105.0956, 39.8589],
    [-105.1123, 39.8623],
    [-105.1289, 39.8689],
    [-105.1423, 39.8823],
    [-105.1489, 39.8978],
    [-105.1512, 39.9134],
    [-105.1489, 39.9289],
    [-105.1456, 39.9434],
    [-105.1423, 39.9589],
    [-105.1389, 39.9723]
  ]],
  erie: [[
    [-105.0923, 40.1034],
    [-105.0789, 40.0989],
    [-105.0645, 40.0934],
    [-105.0512, 40.0878],
    [-105.0389, 40.0823],
    [-105.0278, 40.0756],
    [-105.0189, 40.0678],
    [-105.0123, 40.0589],
    [-105.0089, 40.0489],
    [-105.0123, 40.0389],
    [-105.0189, 40.0289],
    [-105.0278, 40.0201],
    [-105.0389, 40.0134],
    [-105.0512, 40.0089],
    [-105.0645, 40.0056],
    [-105.0789, 40.0089],
    [-105.0923, 40.0134],
    [-105.1034, 40.0201],
    [-105.1123, 40.0289],
    [-105.1189, 40.0389],
    [-105.1223, 40.0489],
    [-105.1189, 40.0589],
    [-105.1123, 40.0678],
    [-105.1034, 40.0756],
    [-105.0956, 40.0823],
    [-105.0923, 40.0878],
    [-105.0923, 40.1034]
  ]],
  niwot: [[
    [-105.2123, 40.1234],
    [-105.1989, 40.1189],
    [-105.1856, 40.1134],
    [-105.1723, 40.1089],
    [-105.1589, 40.1034],
    [-105.1456, 40.0978],
    [-105.1334, 40.0923],
    [-105.1234, 40.0856],
    [-105.1156, 40.0778],
    [-105.1089, 40.0689],
    [-105.1056, 40.0589],
    [-105.1089, 40.0489],
    [-105.1156, 40.0389],
    [-105.1234, 40.0301],
    [-105.1334, 40.0234],
    [-105.1456, 40.0189],
    [-105.1589, 40.0156],
    [-105.1723, 40.0189],
    [-105.1856, 40.0234],
    [-105.1989, 40.0301],
    [-105.2089, 40.0389],
    [-105.2156, 40.0489],
    [-105.2189, 40.0589],
    [-105.2156, 40.0689],
    [-105.2123, 40.0778],
    [-105.2089, 40.0856],
    [-105.2123, 40.0934],
    [-105.2123, 40.1012],
    [-105.2123, 40.1234]
  ]],
  gunbarrel: [[
    [-105.2456, 40.0978],
    [-105.2334, 40.0934],
    [-105.2223, 40.0889],
    [-105.2123, 40.0834],
    [-105.2034, 40.0778],
    [-105.1956, 40.0712],
    [-105.1889, 40.0634],
    [-105.1834, 40.0545],
    [-105.1789, 40.0445],
    [-105.1789, 40.0345],
    [-105.1834, 40.0245],
    [-105.1889, 40.0156],
    [-105.1956, 40.0078],
    [-105.2034, 40.0012],
    [-105.2123, 39.9956],
    [-105.2223, 39.9923],
    [-105.2334, 39.9956],
    [-105.2456, 40.0012],
    [-105.2567, 40.0078],
    [-105.2645, 40.0156],
    [-105.2689, 40.0245],
    [-105.2712, 40.0345],
    [-105.2689, 40.0445],
    [-105.2645, 40.0545],
    [-105.2567, 40.0634],
    [-105.2456, 40.0712],
    [-105.2456, 40.0778],
    [-105.2456, 40.0978]
  ]]
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

  const addServiceAreaPolygons = () => {
    if (!map.current) return;

    locations.forEach((location) => {
      const boundaries = locationBoundaries[location.slug];
      if (!boundaries) return;

      // Add source for this service area
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

      // Add fill layer
      map.current!.addLayer({
        id: `${location.slug}-fill`,
        type: 'fill',
        source: `${location.slug}-area`,
        paint: {
          'fill-color': '#ff6b6b',
          'fill-opacity': 0.3
        }
      });

      // Add border layer
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
        map.current!.setPaintProperty(`${location.slug}-fill`, 'fill-opacity', 0.5);
      });

      map.current!.on('mouseleave', `${location.slug}-fill`, () => {
        map.current!.getCanvas().style.cursor = '';
        map.current!.setPaintProperty(`${location.slug}-fill`, 'fill-opacity', 0.3);
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
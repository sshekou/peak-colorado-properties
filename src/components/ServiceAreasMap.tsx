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

// Service area boundary polygons (approximate)
const locationBoundaries: Record<string, number[][][]> = {
  boulder: [[
    [-105.3200, 40.0800],
    [-105.2200, 40.0800],
    [-105.2200, 39.9800],
    [-105.3200, 39.9800],
    [-105.3200, 40.0800]
  ]],
  longmont: [[
    [-105.1500, 40.2000],
    [-105.0500, 40.2000],
    [-105.0500, 40.1300],
    [-105.1500, 40.1300],
    [-105.1500, 40.2000]
  ]],
  louisville: [[
    [-105.1800, 40.0100],
    [-105.0800, 40.0100],
    [-105.0800, 39.9400],
    [-105.1800, 39.9400],
    [-105.1800, 40.0100]
  ]],
  lafayette: [[
    [-105.1300, 40.0300],
    [-105.0400, 40.0300],
    [-105.0400, 39.9600],
    [-105.1300, 39.9600],
    [-105.1300, 40.0300]
  ]],
  superior: [[
    [-105.2100, 40.0000],
    [-105.1200, 40.0000],
    [-105.1200, 39.9100],
    [-105.2100, 39.9100],
    [-105.2100, 40.0000]
  ]],
  broomfield: [[
    [-105.1300, 39.9600],
    [-105.0400, 39.9600],
    [-105.0400, 39.8800],
    [-105.1300, 39.8800],
    [-105.1300, 39.9600]
  ]],
  erie: [[
    [-105.0900, 40.0900],
    [-105.0100, 40.0900],
    [-105.0100, 40.0100],
    [-105.0900, 40.0100],
    [-105.0900, 40.0900]
  ]],
  niwot: [[
    [-105.2000, 40.1300],
    [-105.1300, 40.1300],
    [-105.1300, 40.0600],
    [-105.2000, 40.0600],
    [-105.2000, 40.1300]
  ]],
  gunbarrel: [[
    [-105.2500, 40.1000],
    [-105.1700, 40.1000],
    [-105.1700, 40.0400],
    [-105.2500, 40.0400],
    [-105.2500, 40.1000]
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
        setMousePosition({ x: e.clientX, y: e.clientY });
      });

      markerEl.addEventListener('mouseleave', () => {
        markerEl.style.transform = 'scale(1)';
        markerEl.style.background = 'hsl(var(--primary))';
        setHoveredLocation(null);
      });

      markerEl.addEventListener('mousemove', (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
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
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Hover tooltip */}
      {hoveredLocation && (
        <Card
          className="absolute pointer-events-none z-10 p-4 min-w-64 shadow-lg"
          style={{
            left: mousePosition.x - 320,
            top: mousePosition.y - 100,
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
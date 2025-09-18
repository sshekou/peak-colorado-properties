import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { locations, LocationInfo } from '@/data/locations';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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

const ServiceAreasMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken] = useState('pk.eyJ1Ijoic3NoZWtvdSIsImEiOiJjbWZwcDFycGswOTNkMmpwbXcxdXltOHdhIn0.cvbUOhH0VSpUWBD04p2XbA');
  const [mapInitialized, setMapInitialized] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState<LocationInfo | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const markersRef = useRef<mapboxgl.Marker[]>([]);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
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
      addLocationMarkers();
      setMapInitialized(true);
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
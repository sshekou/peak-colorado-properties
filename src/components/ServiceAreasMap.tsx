import React, { useEffect, useRef, useState } from 'react';
import { locations, LocationInfo } from '@/data/locations';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

// Boulder County coordinates for each city
const locationCoordinates: Record<string, { lat: number; lng: number }> = {
  boulder: { lat: 40.0150, lng: -105.2705 },
  longmont: { lat: 40.1672, lng: -105.1019 }, 
  louisville: { lat: 39.9778, lng: -105.1317 },
  lafayette: { lat: 39.9936, lng: -105.0894 },
  superior: { lat: 39.9528, lng: -105.1686 },
  broomfield: { lat: 39.9205, lng: -105.0867 },
  erie: { lat: 40.0502, lng: -105.0498 },
  niwot: { lat: 40.0956, lng: -105.1661 },
  gunbarrel: { lat: 40.0697, lng: -105.2094 }
};

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const ServiceAreasMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState<LocationInfo | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const markersRef = useRef<any[]>([]);
  const navigate = useNavigate();
  const GOOGLE_MAPS_API_KEY = 'AIzaSyBLG02Pr8lIYRkwhvaAH799_bSpDk71xaM';

  const loadGoogleMapsScript = () => {
    if (window.google) {
      initializeMap();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    window.initMap = initializeMap;
    
    document.head.appendChild(script);
  };

  const initializeMap = () => {
    if (!mapContainer.current || !window.google) return;

    map.current = new window.google.maps.Map(mapContainer.current, {
      center: { lat: 40.0150, lng: -105.1317 }, // Centered on Boulder County
      zoom: 11,
      styles: [
        {
          featureType: "administrative.locality",
          elementType: "labels",
          stylers: [{ visibility: "on" }]
        }
      ]
    });

    addCityBoundaries();
    addLocationMarkers();
    setMapLoaded(true);
  };

  const addCityBoundaries = () => {
    if (!map.current || !window.google) return;

    locations.forEach((location) => {
      // Create city boundary using Google Maps Data Layer
      const cityName = location.name + ', CO, USA';
      
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: cityName }, (results: any, status: any) => {
        if (status === 'OK' && results[0]) {
          const bounds = results[0].geometry.bounds || results[0].geometry.viewport;
          
          // Create a polygon for the city boundary
          const cityPolygon = new window.google.maps.Polygon({
            paths: [
              bounds.getNorthEast(),
              { lat: bounds.getNorthEast().lat(), lng: bounds.getSouthWest().lng() },
              bounds.getSouthWest(),
              { lat: bounds.getSouthWest().lat(), lng: bounds.getNorthEast().lng() }
            ],
            strokeColor: '#ff4757',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#ff6b6b',
            fillOpacity: 0.3,
            clickable: true
          });

          cityPolygon.setMap(map.current);

          // Add click handler
          cityPolygon.addListener('click', () => {
            navigate(`/service-areas/${location.slug}`);
          });

          // Add hover effects
          cityPolygon.addListener('mouseover', () => {
            cityPolygon.setOptions({
              fillOpacity: 0.5,
              strokeWeight: 3
            });
            map.current.setOptions({ cursor: 'pointer' });
          });

          cityPolygon.addListener('mouseout', () => {
            cityPolygon.setOptions({
              fillOpacity: 0.3,
              strokeWeight: 2
            });
            map.current.setOptions({ cursor: 'default' });
          });
        }
      });
    });
  };

  const addLocationMarkers = () => {
    if (!map.current || !window.google) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    locations.forEach((location) => {
      const coords = locationCoordinates[location.slug];
      if (!coords) return;

      // Create custom marker
      const marker = new window.google.maps.Marker({
        position: coords,
        map: map.current,
        title: location.name,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#ff4757',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 3
        }
      });

      // Add hover effects
      marker.addListener('mouseover', (e: any) => {
        marker.setIcon({
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: '#ff6b6b',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 3
        });
        
        setHoveredLocation(location);
        
        // Get mouse position for tooltip
        const mapRect = mapContainer.current?.getBoundingClientRect();
        if (mapRect && e.domEvent) {
          setMousePosition({ 
            x: e.domEvent.clientX - mapRect.left, 
            y: e.domEvent.clientY - mapRect.top 
          });
        }
      });

      marker.addListener('mouseout', () => {
        marker.setIcon({
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: '#ff4757',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 3
        });
        setHoveredLocation(null);
      });

      // Add click handler
      marker.addListener('click', () => {
        navigate(`/service-areas/${location.slug}`);
      });

      markersRef.current.push(marker);
    });
  };

  useEffect(() => {
    loadGoogleMapsScript();
    return () => {
      markersRef.current.forEach(marker => marker?.setMap(null));
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
      
      {!mapLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Loading Google Maps...</p>
        </div>
      )}
    </div>
  );
};

export default ServiceAreasMap;
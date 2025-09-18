import React, { useEffect, useRef, useState } from 'react';
import { locations, LocationInfo } from '@/data/locations';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
  const GOOGLE_MAPS_MAP_ID = '';
  const [mapStyleId, setMapStyleId] = useState<string>(GOOGLE_MAPS_MAP_ID);
  const [pendingMapId, setPendingMapId] = useState<string>('');

  const loadGoogleMapsScript = () => {
    if (window.google) {
      initializeMap();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=weekly&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    window.initMap = initializeMap;
    
    document.head.appendChild(script);
  };

  const initializeMap = () => {
    if (!mapContainer.current || !window.google) return;

    const options: any = {
      center: { lat: 40.0150, lng: -105.1317 }, // Centered on Boulder County
      zoom: 11,
      styles: [
        {
          featureType: "administrative.locality",
          elementType: "labels",
          stylers: [{ visibility: "on" }]
        }
      ]
    };

    if (mapStyleId) {
      options.mapId = mapStyleId;
    }

    map.current = new window.google.maps.Map(mapContainer.current, options);

    addCityBoundaries();
    addLocationMarkers();
    setMapLoaded(true);
  };

  const addCityBoundaries = () => {
    if (!map.current || !window.google) return;

    const allowedLocalities = new Set<string>(
      locations.map((l) => l.name.toLowerCase())
    );

    // Require Map ID for FeatureLayer boundaries
    if (!mapStyleId) {
      console.warn('Google Map ID required for DDS boundaries. Configure a Map ID with the LOCALITY Feature Layer enabled.');
      return;
    }

    // Use Google Maps Feature Layer for precise city boundaries
    const localityLayer = map.current.getFeatureLayer('LOCALITY');

    localityLayer.style = (options: any) => {
      const name = options?.feature?.displayName?.toLowerCase?.();
      if (name && allowedLocalities.has(name)) {
        return {
          strokeColor: '#ff4757',
          strokeOpacity: 0.9,
          strokeWeight: 2,
          fillColor: '#ff6b6b',
          fillOpacity: 0.25,
          visible: true,
        };
      }
      return { visible: false };
    };

    // Click to navigate to service area detail
    localityLayer.addListener('click', (e: any) => {
      const feature = e?.features?.[0];
      const displayName = feature?.displayName as string | undefined;
      if (!displayName) return;
      const loc = locations.find(
        (l) => l.name.toLowerCase() === displayName.toLowerCase()
      );
      if (loc) navigate(`/service-areas/${loc.slug}`);
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

  // Reinitialize map when Map ID changes to enable boundaries
  useEffect(() => {
    if (!window.google || !mapContainer.current) return;
    initializeMap();
  }, [mapStyleId]);

  const applyMapId = () => {
    if (!pendingMapId.trim()) return;
    setMapStyleId(pendingMapId.trim());
  };

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />

      {!mapStyleId && (
        <div className="absolute top-3 left-3 z-20 bg-background/90 backdrop-blur-sm border rounded-md p-3 shadow">
          <div className="text-sm mb-2">Add Google Map ID to enable precise city boundaries.</div>
          <div className="flex gap-2">
            <Input
              value={pendingMapId}
              onChange={(e) => setPendingMapId(e.target.value)}
              placeholder="Map ID (e.g. 8b12a3cdef...)"
            />
            <Button size="sm" onClick={applyMapId}>Apply</Button>
          </div>
        </div>
      )}
      
      
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
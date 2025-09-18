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

// Known Google Place IDs for Locality features
const localityPlaceIds: Record<string, string> = {
  boulder: 'ChIJ06-NJ06Na4cRWIAboHw7Ocg', // Boulder, CO
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
  const boundariesStyledRef = useRef<boolean>(false);
  const styleHitCountRef = useRef<number>(0);
  const navigate = useNavigate();
  const GOOGLE_MAPS_API_KEY = 'AIzaSyBLG02Pr8lIYRkwhvaAH799_bSpDk71xaM';
  const GOOGLE_MAPS_MAP_ID = '84ff254c08985d6bbe4ce6bf';
  const [mapStyleId, setMapStyleId] = useState<string>(GOOGLE_MAPS_MAP_ID);
  const [pendingMapId, setPendingMapId] = useState<string>('');
  const [mapError, setMapError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string>(GOOGLE_MAPS_API_KEY);
  const [pendingApiKey, setPendingApiKey] = useState<string>('');

  const loadGoogleMapsScript = () => {
    if (window.google) {
      initializeMap();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      setMapError('Unable to load Google Maps. Please verify API key and referer restrictions.');
      setMapLoaded(true);
    };
    
    window.initMap = initializeMap;
    
    document.head.appendChild(script);
  };

  const initializeMap = () => {
    if (!mapContainer.current || !window.google) return;

    try {
      const options: any = {
        center: { lat: 40.0150, lng: -105.1317 }, // Centered on Boulder County
        zoom: 11,
      };

      if (mapStyleId) {
        options.mapId = mapStyleId;
      } else {
        // Fallback inline styles only when no Map ID is provided
        options.styles = [
          {
            featureType: "administrative.locality",
            elementType: "labels",
            stylers: [{ visibility: "on" }],
          },
        ];
      }
  
    map.current = new window.google.maps.Map(mapContainer.current, options);

    // Ensure feature layers are ready; apply on style load and idle fallback
    map.current.addListener('styledata_changed', () => {
      addCityBoundaries();
    });
    map.current.addListener('idle', () => {
      addCityBoundaries();
    });

    addLocationMarkers();
    setMapLoaded(true);
    } catch (err: any) {
      setMapError(err?.message || 'Failed to initialize Google Map');
      setMapLoaded(true);
    }
  };

  const addCityBoundaries = () => {
    if (!map.current || !window.google) return;

    const allowedNames = new Set<string>(locations.map((l) => l.name.toLowerCase()));
    const placeIdToSlug: Record<string, string> = { ...localityPlaceIds };
    const allowedPlaceIds = new Set<string>(Object.values(localityPlaceIds));

    if (!mapStyleId) {
      console.warn('Google Map ID required for DDS boundaries. Configure a Map ID with LOCALITY feature layer enabled.');
      return;
    }

    try {
      console.debug('[Map] addCityBoundaries: applying styles for LOCALITY with Map ID:', mapStyleId);
      // LOCALITY (cities and towns)
      const locality = map.current.getFeatureLayer(window.google.maps.FeatureType.LOCALITY);
      
      locality.style = (opts: any) => {
        const feature = opts?.feature;
        const pid: string | undefined = feature?.placeId;
        const name = feature?.displayName?.toLowerCase?.() || '';
        const nameMatch = Array.from(allowedNames).some((a) => name === a || name.includes(a));
        const idMatch = pid ? allowedPlaceIds.has(pid) : false;
        const matched = idMatch || nameMatch;
        if (matched && styleHitCountRef.current < 5) {
          console.debug('[Map] Styling LOCALITY boundary', { name, pid });
          styleHitCountRef.current += 1;
        }
        if (matched) {
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

      locality.addListener('click', (e: any) => {
        const feature = e?.features?.[0];
        const pid: string | undefined = feature?.placeId;
        if (pid && placeIdToSlug[pid]) {
          navigate(`/service-areas/${placeIdToSlug[pid]}`);
          return;
        }
        const displayName: string | undefined = feature?.displayName;
        if (!displayName) return;
        const loc = locations.find((l) => displayName.toLowerCase().includes(l.name.toLowerCase()));
        if (loc) navigate(`/service-areas/${loc.slug}`);
      });

      boundariesStyledRef.current = true;

    } catch (err: any) {
      console.error('Error setting up city boundaries:', err);
      setMapError(`Boundary error: ${err.message}`);
    }
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

  useEffect(() => {
    try {
      const storedKey = localStorage.getItem('googleMapsApiKey');
      const storedMapId = localStorage.getItem('googleMapsMapId');
      if (storedKey) setApiKey(storedKey);
      if (storedMapId) setMapStyleId(storedMapId);
    } catch {}
  }, []);

  // Reinitialize map when Map ID changes to enable boundaries
  useEffect(() => {
    if (!window.google || !mapContainer.current) return;
    initializeMap();
  }, [mapStyleId]);

  // Keep input in sync with active Map ID
  useEffect(() => {
    setPendingMapId(mapStyleId || '');
  }, [mapStyleId]);

  useEffect(() => {
    setPendingApiKey(apiKey || '');
  }, [apiKey]);

  const applySettings = () => {
    const newId = pendingMapId.trim();
    const newKey = pendingApiKey.trim();
    if (newId) {
      setMapStyleId(newId);
      try { localStorage.setItem('googleMapsMapId', newId); } catch {}
    }
    if (newKey) {
      setApiKey(newKey);
      try { localStorage.setItem('googleMapsApiKey', newKey); } catch {}
    }
    reloadMapsScript();
  };

  const reloadMapsScript = () => {
    try {
      boundariesStyledRef.current = false;
      styleHitCountRef.current = 0;
      markersRef.current.forEach((m) => m?.setMap?.(null));
      markersRef.current = [];
      setMapLoaded(false);
      setMapError(null);
      // Remove existing Google Maps scripts
      document
        .querySelectorAll('script[src*="maps.googleapis.com/maps/api/js"]')
        .forEach((s) => s.parentNode?.removeChild(s));
      // Reset global google object
      // @ts-ignore
      if ((window as any).google) {
        // @ts-ignore
        delete (window as any).google;
      }
      window.initMap = initializeMap;
      loadGoogleMapsScript();
    } catch (e) {
      console.error('Reload Maps script failed', e);
      loadGoogleMapsScript();
    }
  };

  const refreshMap = () => {
    try {
      boundariesStyledRef.current = false;
      styleHitCountRef.current = 0;
      // Clear markers
      markersRef.current.forEach((m) => m?.setMap?.(null));
      markersRef.current = [];
      console.debug('[Map] Manual refresh triggered');
      initializeMap();
    } catch (e) {
      console.error('Refresh map failed', e);
    }
  };
  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />

      <div className="absolute top-3 right-3 z-20">
        <Button size="sm" variant="secondary" onClick={refreshMap}>Refresh Map</Button>
      </div>

        <div className="absolute top-3 left-3 z-20 bg-background/90 backdrop-blur-sm border rounded-md p-3 shadow max-w-sm">
          <div className="text-xs mb-2 leading-snug">
            Data‑Driven Boundaries require a Vector Map ID with Feature Layers → Boundaries → Locality enabled. Also ensure your API key and Map ID are in the same Google Cloud project.
          </div>
          <div className="flex flex-col gap-2">
            <Input
              type="password"
              value={pendingApiKey}
              onChange={(e) => setPendingApiKey(e.target.value)}
              placeholder={`API Key (${apiKey ? 'set' : 'enter key'})`}
            />
            <div className="flex gap-2">
              <Input
                value={pendingMapId}
                onChange={(e) => setPendingMapId(e.target.value)}
                placeholder={`Map ID (current: ${mapStyleId || 'none'})`}
              />
              <Button size="sm" onClick={applySettings}>Apply</Button>
            </div>
          </div>
        </div>
      
      
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
      
      {!mapLoaded && !mapError && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Loading Google Maps...</p>
        </div>
      )}

      {mapError && (
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center p-6 text-center">
          <div>
            <p className="font-medium mb-2">{mapError}</p>
            <p className="text-sm text-muted-foreground">Tip: Use a browser API key from the same project as your Map ID, allow this domain in HTTP referrers, and enable Boundaries → Locality in the Map Style.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceAreasMap;
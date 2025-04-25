'use client';

import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

export default function MapView({ listings = [] }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading map…</div>;

  return (
    <div style={{ width: '100%', height: '60vh' }}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={{ lat: -35.8, lng: 137.3 }}
        zoom={10}
      >
        {listings.map(item => {
          // support GeoPoint (lat,lng) or manual fields (latitude,longitude)
          const lat = item.location.latitude ?? item.location.lat;
          const lng = item.location.longitude ?? item.location.lng;
          return (
            <Marker
              key={item.id}
              position={{ lat, lng }}
              title={item.name}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
}


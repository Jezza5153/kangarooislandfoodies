'use client';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';

export default function MapView() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <div>Loading map…</div>;

  return (
    <div style={{ width: '100%', height: '80vh' }}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={{ lat: -35.8, lng: 137.3 }}
        zoom={10}
      />
    </div>
  );
}

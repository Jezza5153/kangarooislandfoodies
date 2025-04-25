'use client';
import dynamic from 'next/dynamic';

const MapView = dynamic(() => import('../components/MapView'), { ssr: false });

export default function Home() {
  return (
    <main style={{ padding: '0 1rem' }}>
      <h1>Kangaroo Island Foodies</h1>
      <MapView />
    </main>
  );
}

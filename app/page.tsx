import dynamic from 'next/dynamic';

const MapView = dynamic(() => import('../components/MapView'), { ssr: false });

export default function Home() {
  return (
    <main>
      <h1>Kangaroo Island Foodies</h1>
      <MapView />
      {/* TODO: below here we’ll add listings, filters, etc. */}
    </main>
  );
}

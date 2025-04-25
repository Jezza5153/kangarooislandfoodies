'use client';
import dynamic from 'next/dynamic';
import { useListings } from '../lib/useListings';
import ListingCard from '../components/ListingCard';

const MapView = dynamic(() => import('../components/MapView'), { ssr: false });

export default function Home() {
  const restaurants = useListings('restaurants');
  const producers   = useListings('producers');
  const allItems    = [...restaurants, ...producers];

  return (
    <main style={{ padding: '1rem' }}>
      <h1>Kangaroo Island Foodies</h1>
      <MapView listings={allItems} />
      <section style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
        {allItems.map(item => (
          <ListingCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}

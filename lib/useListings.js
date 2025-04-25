// lib/useListings.js
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export function useListings(type) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    (async () => {
      const snap = await getDocs(collection(db, type));
      setItems(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    })();
  }, [type]);
  return items;
}


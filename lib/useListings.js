// lib/useListings.js
import { useState, useEffect } from 'react';
import { getFirestore, collection, query, onSnapshot } from 'firebase/firestore';
import './firebaseConfig';

const db = getFirestore();

export function useListings(collectionName) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const q = query(collection(db, collectionName));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      },
      (error) => {
        // ← this will show the real Firestore error in your Console
        console.error(`🔴 Firestore onSnapshot error for "${collectionName}":`, error);
      }
    );

    return unsubscribe;
  }, [collectionName]);

  return data;
}


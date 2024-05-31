import { useEffect, useRef, useState } from 'react';
import { db } from '../firebase/config';
// firebase imports
import { collection, onSnapshot, query, where } from 'firebase/firestore';

const useCollection = (c,_q) => {
    const [documents, setDocuments] = useState(null);

    // SETUP QUERY(ARRAY IF CHANGES).VALUE
    const q = useRef(_q).current


    useEffect(() => {
        // Check if the collection path is provided
        if (!c) {
            console.error('Collection path is empty');
            return; 
        }

        // SPECIFIC COLLECTION
        let ref = collection(db, c);
        
        // OPTIONALLY PARAMS(ARRAY)
        if(q){
           ref = query(ref, where(...q))
        }
   
        // AWHILE
        const unsub = onSnapshot(ref, (snapshot) => {
            let results = [];
            snapshot.docs.forEach((doc) => {
                results.push({ id: doc.id, ...doc.data() });
            });
            setDocuments(results);
        });

        return () => unsub();
    }, [c]);

    return { documents };
};

export default useCollection;

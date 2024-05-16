import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdYlw-yDB1ktBptXS1-J5BkiehKMJ1opk",
    authDomain: "booking-list-98711.firebaseapp.com",
    projectId: "booking-list-98711",
    storageBucket: "booking-list-98711.appspot.com",
    messagingSenderId: "294421195642",
    appId: "1:294421195642:web:8501fd481cb971e21ac4c3"
  }

// Starts Backend
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }
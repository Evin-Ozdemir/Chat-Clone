// Firebase SDK'dan gerekli fonksiyonları import et
import { initializeApp } from "firebase/app";

// ! Auth importu
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// ! Database importu
import { getFirestore } from "firebase/firestore";
import { getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Firebase başlat
const app = initializeApp(firebaseConfig);

//! authentication hizmetinin referansını al
const auth = getAuth(app);

//! google sağlaycısının kurulumu
const provider = new GoogleAuthProvider();

//! firestore (veritabanı) hizmetinin kurulumu
const db = getFirestore(app);

//! Tek bir export bloğunda değişkenleri export et
export { auth, provider, db, getToken };

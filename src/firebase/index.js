// Firebase SDK'dan gerekli fonksiyonları import et
import { initializeApp } from "firebase/app";

// ! Auth importu
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// ! Database importu
import { getFirestore } from "firebase/firestore";
import { getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyB5ip9yut30K4Y1F8DUjHCiI74nsECIkK4",
  authDomain: "chatapp-ce65b.firebaseapp.com",
  projectId: "chatapp-ce65b",
  storageBucket: "chatapp-ce65b.firebasestorage.app",
  messagingSenderId: "541861823546",
  appId: "1:541861823546:web:2c00741a21b94abefd6103",
  measurementId: "G-GM7BZ17Q3E",
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

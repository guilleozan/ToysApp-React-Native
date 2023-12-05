// Importa solo las funciones necesarias de la biblioteca 'firebase/app'
import { initializeApp } from 'firebase/app';
// Importa solo 'firestore' de 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDiRCYusBktuER4bJ-eUjenrzflzbtBf1w",
  authDomain: "toys-68c8e.firebaseapp.com",
  projectId: "toys-68c8e",
  storageBucket: "toys-68c8e.appspot.com",
  messagingSenderId: "80358797720",
  appId: "1:80358797720:web:32288e69aaaae80cd1fbed",
  measurementId: "G-VLZDJLJSDP"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-b8a7c.firebaseapp.com",
  projectId: "real-estate-b8a7c",
  storageBucket: "real-estate-b8a7c.firebasestorage.app",
  messagingSenderId: "231776696747",
  appId: "1:231776696747:web:4e1d25ce82acd885d67aee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
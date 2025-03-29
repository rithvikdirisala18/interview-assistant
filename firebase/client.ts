// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqv5FvLLr_GoGmCPcBth0YCnJsPZrC8Tw",
  authDomain: "interview-prep-ecc16.firebaseapp.com",
  projectId: "interview-prep-ecc16",
  storageBucket: "interview-prep-ecc16.firebasestorage.app",
  messagingSenderId: "401521874372",
  appId: "1:401521874372:web:561351385eec13b9a10091",
  measurementId: "G-60EWL9T4GK"
};


const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
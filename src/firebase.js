import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLs1XQnbnJeZyCk9EVgBxPR58v8b6HwM0",
  authDomain: "disaster-alert-hub-app.firebaseapp.com",
  projectId: "disaster-alert-hub-app",
  storageBucket: "disaster-alert-hub-app.firebasestorage.app",
  messagingSenderId: "118610052644",
  appId: "1:118610052644:web:d2fa63573d2d4f5d80bab1",
  measurementId: "G-C14P92DXDT"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 
export const auth = getAuth(app);
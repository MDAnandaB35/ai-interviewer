// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCic8ZwGh__e4lIUkcp3JN-VR5pHJHbi-c",
  authDomain: "interview-app-ba027.firebaseapp.com",
  projectId: "interview-app-ba027",
  storageBucket: "interview-app-ba027.firebasestorage.app",
  messagingSenderId: "211448006479",
  appId: "1:211448006479:web:6c341fcbbc372ddef2273a",
  measurementId: "G-D9D0QE7HQS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
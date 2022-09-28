// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgS9Z6sGw-fA_cgGAeZJIwE8QELLufEaY",
  authDomain: "el-club-de-la-birra.firebaseapp.com",
  projectId: "el-club-de-la-birra",
  storageBucket: "el-club-de-la-birra.appspot.com",
  messagingSenderId: "454709553588",
  appId: "1:454709553588:web:14d019c20317c70fab2ae1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
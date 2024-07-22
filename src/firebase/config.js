// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAQa_Suh7mEeitcSy0YovjFtcLsC1an5Y",
  authDomain: "comision57775.firebaseapp.com",
  projectId: "comision57775",
  storageBucket: "comision57775.appspot.com",
  messagingSenderId: "1064813910540",
  appId: "1:1064813910540:web:8b5ede6ef4168d7ec62c29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

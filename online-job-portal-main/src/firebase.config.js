// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAirF2DvzA0i8mhdESHUovDNHsoOqR4nes",
  authDomain: "job-portal-d4e9e.firebaseapp.com",
  projectId: "job-portal-d4e9e",
  storageBucket: "job-portal-d4e9e.firebasestorage.app",
  messagingSenderId: "882748108230",
  appId: "1:882748108230:web:3223a9b7654d767f1d56c7",
  measurementId: "G-VJSY019XS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);       
export {db}; 
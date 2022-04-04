// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4ta-DFP3iYWdq3tLlj3gq2ugfyAQiXFw",
  authDomain: "udemy-vue-firebase-sites-ae5ca.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-ae5ca",
  storageBucket: "udemy-vue-firebase-sites-ae5ca.appspot.com",
  messagingSenderId: "146098405459",
  appId: "1:146098405459:web:d13e54f43f4b1f4dcdc6a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//creates connection to collection
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth }
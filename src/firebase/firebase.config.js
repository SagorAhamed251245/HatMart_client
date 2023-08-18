// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmmGq4yTVju9DPeCDnDXJviFGnyKMFnho",
  authDomain: "hatmart-700d2.firebaseapp.com",
  projectId: "hatmart-700d2",
  storageBucket: "hatmart-700d2.appspot.com",
  messagingSenderId: "160019585283",
  appId: "1:160019585283:web:720210a901eb6be31df136",
  measurementId: "G-N0PP2LX38C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // Import getStorage instead of storage
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA0t-adIUYRMztD6oV0R3GikVDv1xybmw",
  authDomain: "hatmart-e8316.firebaseapp.com",
  projectId: "hatmart-e8316",
  storageBucket: "hatmart-e8316.appspot.com",
  messagingSenderId: "897550218427",
  appId: "1:897550218427:web:a8b67ece723c7b055ca59e",
  databaseURL: "gs://hatmart-e8316.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // Initialize Firebase Storage using getStorage

export { app, storage };

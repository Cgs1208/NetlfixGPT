// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoYTguIw313OHupFrL0tB8bbZQ9aIlvBM",
  authDomain: "netflixgpt-2d7f0.firebaseapp.com",
  projectId: "netflixgpt-2d7f0",
  storageBucket: "netflixgpt-2d7f0.appspot.com",
  messagingSenderId: "420435838037",
  appId: "1:420435838037:web:f9a2e9b4ad76909cd680dc",
  measurementId: "G-8SY6L683Q5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

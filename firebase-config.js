// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLEOwbbXDk4PfzKbmaL8-SREnv1qnbfmc",
  authDomain: "axelz-ace51.firebaseapp.com",
  projectId: "axelz-ace51",
  storageBucket: "axelz-ace51.firebasestorage.app",
  messagingSenderId: "849522382126",
  appId: "1:849522382126:web:417c86a09009d29930d6bf",
  measurementId: "G-6KZ9TVX8E6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
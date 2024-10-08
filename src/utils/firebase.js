// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmJyWZVIRP3yP0jtX2YTudJwg3-zv27PY",
  authDomain: "moviemaestro-47674.firebaseapp.com",
  projectId: "moviemaestro-47674",
  storageBucket: "moviemaestro-47674.appspot.com",
  messagingSenderId: "903995508613",
  appId: "1:903995508613:web:88be713cb14b7a358826ec",
  measurementId: "G-L2SR13S66M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
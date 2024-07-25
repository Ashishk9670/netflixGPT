// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo0eTmOGg2yWlipncWsPDVSfku2mLQMoU",
  authDomain: "netflix-gpt-80d06.firebaseapp.com",
  projectId: "netflix-gpt-80d06",
  storageBucket: "netflix-gpt-80d06.appspot.com",
  messagingSenderId: "569698571887",
  appId: "1:569698571887:web:2387a436821f54e5ccdf9a",
  measurementId: "G-LMPQFVKG69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

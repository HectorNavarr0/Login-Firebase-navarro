// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhl7sYCt1PCQxX3yTTKMvFA4k8vA1332w",
  authDomain: "coffeeandcode-6cad4.firebaseapp.com",
  projectId: "coffeeandcode-6cad4",
  storageBucket: "coffeeandcode-6cad4.appspot.com",
  messagingSenderId: "15010066747",
  appId: "1:15010066747:web:86b38ff3b579e66249c71e",
  measurementId: "G-EW32MFPLF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJMg_amOT_BWnyTxX7G5dBGaqcV7rghcw",
  authDomain: "banking-94f32.firebaseapp.com",
  projectId: "banking-94f32",
  storageBucket: "banking-94f32.appspot.com",
  messagingSenderId: "405650490783",
  appId: "1:405650490783:web:25bb19fd496644825669aa",
};
// Initialize Firebase
export const app =
  getApps.length > 0 ? getApps() : initializeApp(firebaseConfig);

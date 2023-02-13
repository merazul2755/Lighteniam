// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuBmLKyBvR3K3k2S95lFixMSIzcaHjN3Y",
  authDomain: "lighteniam-91d91.firebaseapp.com",
  projectId: "lighteniam-91d91",
  storageBucket: "lighteniam-91d91.appspot.com",
  messagingSenderId: "1095336192900",
  appId: "1:1095336192900:web:3826f97cbacdf684144bd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getDatabase(app);
export default auth;

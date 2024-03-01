// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe-tS1nckIq65O8RC30O8if4YsgRX5CgE",
  authDomain: "auth-8c7da.firebaseapp.com",
  projectId: "auth-8c7da",
  storageBucket: "auth-8c7da.appspot.com",
  messagingSenderId: "764601974172",
  appId: "1:764601974172:web:7978a857432e2412c69c59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtMsv3fAq6GJY8OS4h1d3zjGIZJk-08O8",
  authDomain: "myblog-8bf0f.firebaseapp.com",
  projectId: "myblog-8bf0f",
  storageBucket: "myblog-8bf0f.appspot.com",
  messagingSenderId: "502451290148",
  appId: "1:502451290148:web:a1056650550c18c60b98b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
const storage = getStorage(app);
export { fireDB, auth, storage };
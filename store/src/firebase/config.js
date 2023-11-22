// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKncO4D7zHBpdj5hL1KYfRSH7T-6DyBrQ",
    authDomain: "journalapp-3824e.firebaseapp.com",
    projectId: "journalapp-3824e",
    storageBucket: "journalapp-3824e.appspot.com",
    messagingSenderId: "862009482332",
    appId: "1:862009482332:web:440ca6354b1188f2b69a99",
    measurementId: "G-HQF3RYR6QY"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
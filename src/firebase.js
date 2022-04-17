// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUqKmWa5XBgajsVlgOuE21lv-BO-59olg",
    authDomain: "clone-4af36.firebaseapp.com",
    projectId: "clone-4af36",
    storageBucket: "clone-4af36.appspot.com",
    messagingSenderId: "617593060269",
    appId: "1:617593060269:web:d5bf30e969b46c41f17f24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};
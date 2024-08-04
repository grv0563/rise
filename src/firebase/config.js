// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhv3iZL4msd-Taqz9d-MM-0B_fEFq6j_s",
  authDomain: "rise-a4dc0.firebaseapp.com",
  projectId: "rise-a4dc0",
  storageBucket: "rise-a4dc0.appspot.com",
  messagingSenderId: "180059999602",
  appId: "1:180059999602:web:d5565ae1e2e70bc002a1eb",
  measurementId: "G-TGDS1S1KTY"
};

/// init firebase
const app = initializeApp(firebaseConfig);

// init services
const projectFirestore = getFirestore(app);
const projectAuth = getAuth(app);

// timestamp
// const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth }
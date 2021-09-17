// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onIdTokenChanged, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const doCreateUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const doSignInWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(auth, email, password);
const doSignOut = (email, password) => signOut( auth );
const doSignInWithPopup = (Provider) => {
  if (Provider === 'google') {
    signInWithPopup(auth, new GoogleAuthProvider); 
  }
};

export { auth, doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignOut, doSignInWithPopup, onIdTokenChanged, onAuthStateChanged };
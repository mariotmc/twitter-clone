import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVUfko2wWNMlxVbLQuP78MtfioAotqgI8",
  authDomain: "twitter-clone-becc1.firebaseapp.com",
  projectId: "twitter-clone-becc1",
  storageBucket: "twitter-clone-becc1.appspot.com",
  messagingSenderId: "644489023451",
  appId: "1:644489023451:web:3e6a648a173b62fabee1fe",
};

initializeApp(firebaseConfig);
const auth = getAuth();

// create a form that on submit will trigger a function that uses createUserWithEmailAndPassword

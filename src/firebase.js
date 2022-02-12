import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = getAuth(app);
export const db = getFirestore(app);
const usersCollection = collection(db, "users");

export const fetchUsers = () => {
  let users = [];

  getDocs(usersCollection)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data() });
      });
    })
    .catch((err) => console.log(err.message));

  return users;
};

export const createUser = (name, email, dobDay, dobMonth, dobYear) => {
  // name, email, dob, picture, theme preferences
  return addDoc(usersCollection, { name, email, dob: `${dobDay}.${dobMonth}.${dobYear}` });
};

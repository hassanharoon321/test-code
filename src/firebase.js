import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjij4XyQ0GH99D4-",
  authDomain: "todo-8cd0e.firebaseapp.com",
  projectId: "todo-8cd0e",
  storageBucket: "todo-8cd0e.appspot.com",
  messagingSenderId: "441974583828",
  appId: "1:441974583828:web:4719c1dfee893da32bed01"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
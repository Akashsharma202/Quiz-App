import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig1 = {
  apiKey: "AIzaSyCMcbi0YaVE9DT8Cn0MqbmwZMgJhsDv3xo",
  authDomain: "quizapp-d8025.firebaseapp.com",
  projectId: "quizapp-d8025",
  storageBucket: "quizapp-d8025.appspot.com",
  messagingSenderId: "895896033608",
  appId: "1:895896033608:web:bf83905cf6369c13417b7d",
  measurementId: "G-WF0NGN2FQV"
};

const firebaseConfig2 = {
  apiKey: "AIzaSyB8n55Gdq35qYnceVQA5i2nUKYGaPYrrnw",
  authDomain:"njwbfjd.firebaseapp.com",
  databaseURL: "https://njwbfjd-default-rtdb.firebaseio.com",
  projectId: "njwbfjd",
  storageBucket: "njwbfjd.appspot.com",
  messagingSenderId: "759024699998",
  appId: "1:759024699998:web:afd249dc7606fd9e2b02cf",
  measurementId: "G-2PSFKEGRMS"
};
const app1 = initializeApp(firebaseConfig1,"app1");
export const auth1 = getAuth(app1);
const app2 = initializeApp(firebaseConfig2,"app2");
export const auth2 = getAuth(app2);
export const db2 = getFirestore(app2);
export const googleProvider2 = new GoogleAuthProvider();
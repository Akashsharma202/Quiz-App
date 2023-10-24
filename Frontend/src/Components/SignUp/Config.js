import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc, 
} from "firebase/firestore";
// import cors from 'cors';
// import express from 'express';
// const dapp=express();
// dapp.use(cors());
const firebaseConfig = {
  apiKey: "AIzaSyCMcbi0YaVE9DT8Cn0MqbmwZMgJhsDv3xo",
  authDomain: "quizapp-d8025.firebaseapp.com",
  projectId: "quizapp-d8025",
  storageBucket: "quizapp-d8025.appspot.com",
  messagingSenderId: "895896033608",
  appId: "1:895896033608:web:bf83905cf6369c13417b7d",
  measurementId: "G-WF0NGN2FQV"
};
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
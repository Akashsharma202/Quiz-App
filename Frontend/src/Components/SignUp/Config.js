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
  apiKey: "AIzaSyB8n55Gdq35qYnceVQA5i2nUKYGaPYrrnw",
  authDomain:"njwbfjd.firebaseapp.com",
  databaseURL: "https://njwbfjd-default-rtdb.firebaseio.com",
  projectId: "njwbfjd",
  storageBucket: "njwbfjd.appspot.com",
  messagingSenderId: "759024699998",
  appId: "1:759024699998:web:afd249dc7606fd9e2b02cf",
  measurementId: "G-2PSFKEGRMS"
};
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
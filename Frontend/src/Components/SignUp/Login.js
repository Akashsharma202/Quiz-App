import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "./Config";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc, 
} from "firebase/firestore";
import { NavLink, useNavigate } from 'react-router-dom'
import "./SignUp.css";
export const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    props.setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        props.setSuccess(true);
        const user = userCredential.user;
        getUsernameByUID(user.uid);
        navigate("/home")
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      })
       .finally(()=>{
        setTimeout(() => {
          props.setLoading(false);
        }, 2000);
       })
  }

  const getUsernameByUID = async (uid) => {
    const db = getFirestore(auth.app); // Use the same Firebase app instance
  
    const usersCollection = collection(db, "users"); // Replace "users" with the actual collection name
    const userQuery = query(usersCollection, where("uid", "==", uid));
  
    try {
      const querySnapshot = await getDocs(userQuery);
  
      if (querySnapshot.size === 1) {
        // If a matching user document is found, get the username
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        props.setUser(userData);
        const username = userData.username;
      } else {
        // Handle the case where the user document with the given uid doesn't exist
        console.log("username not found");
      }
    } catch (error) {
      console.error("Error getting user data:", error);
      return null;
    }
  };

  return (
    <>
      <form className="form">
        <h2>Login Form</h2>
        <div className="Inner">
          <input
            id="email-address"
            name="email"
            type="email"
            className="Email"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            name="password"
            type="password"
            className="Password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={onLogin}
            className="SignIn"
          >
            Login
          </button>
          <p className="text" style={{color:"black"}}>
            No account yet? {' '}
            <NavLink to="/">
              Sign up
            </NavLink>
          </p>
        </div>
      </form>
    </>
  )
}
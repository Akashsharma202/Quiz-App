import { auth2, googleProvider2,db2 } from "../../firebase.js";
import axios from "axios";
import { createUserWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc, 
} from "firebase/firestore";
import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import "./Auth.css";

export const Auth = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState("")
  const onSubmit = async (e) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth2, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        await addDoc(collection(db2, "users"), {
          uid: user.uid,
          username,
          authProvider: "local",
          email,
        });
        console.log(user);
        const response = await axios.post('https://quizserver-app.vercel.app/scorecard/UploadScoreCard/', {UserId:user.uid,UserName:username});
        // props.setSuccess(true);
        signOut(auth2);
        navigate("/goLogin");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });

  }
  return (
    <div className="parent">
      {/* <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password.."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}> Signin</button>
      <button onClick={signInWithGoogle}> Signin with google</button>
      <button onClick={logOut}> logOut</button> */}
      <form className="form">
        <h2>SignIn Form</h2>
        <div className="Inner">
          <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} className="user" />
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="Email" />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="Password"
          />
          <button onClick={onSubmit} className="SignIn"> SignIn</button>
          {/* <button className="Google" onClick={signInWithGoogle}><img src={require("./google.png")} width="30px" height="30px"></img> Signin with google</button> */}
          <p className="text" style={{ color: "black" }}>
            Already have an acount? {' '}
            <NavLink to="/login">
              Log In
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};


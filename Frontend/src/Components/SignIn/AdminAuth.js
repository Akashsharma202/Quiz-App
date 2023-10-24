import React,{useState} from "react";
import {auth1} from "../../firebase.js";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import "../SignUp/SignUp.css";
export const AdminAuth=(props)=>{
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    props.setLoading(true);
    signInWithEmailAndPassword(auth1, email, password)
      .then((userCredential) => {
        // Signed in
        props.setAdminAuth(true);
        const user = userCredential.user;
        navigate("/admin")
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

 

  return (
    <>
      <form className="form">
        <h2>Admin Login Form</h2>
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
            Not admin? {' '}
            <NavLink to="/">
              user Signup
            </NavLink>
          </p>
        </div>
      </form>
    </>
  );
}
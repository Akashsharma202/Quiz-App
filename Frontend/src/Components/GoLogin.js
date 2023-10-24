import React from "react";
import { NavLink, useNavigate } from 'react-router-dom'
export const GoLogin=()=>{
    return(
        <>
        <div>
            <h3 style={{color:"black",marginTop:"5%"}}>You have successfully registerd!! continue to <NavLink to="/login">
              Log In
            </NavLink></h3>
        </div>
        </>
    )
}
import React from 'react';
import "./Nav.css";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';

const NavBarBoots = (props) => {
    const navigate=useNavigate();
    const handleSignOut=async()=>{
        try{
            navigate("/")
            window.location.reload();
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{maxHeight:"60px"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand mx-3" to="/home"><img src={require('./quiz.png')} height={50} alt="Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3 fs-5">
                            <li className="nav-item mx-2">
                                <Link className={`nav-link active ${props.dis}`} aria-current="page" to={props.success ? "/home" : "/"}>{props.success ? "Home" : "Quizzie"}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.dis}`} to="/contact">{props.success ? "Contact" : ""}</Link>
                            </li>
                        </ul>
                        <div className='NavEnd'>
                            {props.flag ?
                                ""
                                :
                                props.success ? <Link to='/scorecard' className='my-2 mx-2' style={{textDecoration:"none",color:"black",fontSize:"20px",paddingTop:"5px"}}><img src={require("./trophy.png")} style={{width:"40px"}}/></Link> :
                                <>
                                <Link to='/adminAuth' className='my-2 mx-2' style={{textDecoration:"none",color:"black",fontSize:"20px"}}>Admin</Link>
                                {props.adminAuth?<h5 style={{marginTop:"12px",color:"red",cursor:"pointer"}} onClick={handleSignOut}>SignOut</h5>:""}
                                </> 
                            }
                            {props.success ?
                                <div style={{ marginTop: "5px" }}>
                                    
                                    <Dropdown>
                                        <Dropdown.Toggle style={{backgroundColor:"#f8f9fa",border:"1px #f8f9fa",display:"flex",columnGap:"5px"}} id="dropdown-basic">
                                        <img src={require("./man.png")} style={{width:"40px"}}></img> <h2 style={{color:"black",fontSize:"20px"}}>{props.user.username}</h2>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={()=>navigate('/profile')}>Profile</Dropdown.Item>
                                            <Dropdown.Item style={{color:"red"}} to="/" onClick={handleSignOut}>Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    
                                </div>
                                :
                                ""
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBarBoots;
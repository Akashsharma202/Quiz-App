import {Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import NavBarBoots from './Components/NavBarBoots';
import Search from './Components/Search';
import Cart from './Components/Cart';
import { Auth } from "./Components/SignIn/Auth";
import {Login} from "./Components/SignUp/Login";
import { HomeNoAuth } from "./Components/HomeNoAuth";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Skeleton } from "./Components/Skeleton";
import Search2 from "./Search2";
import Description from "./Components/Description";
import  AdminUpload  from "./Components/AdminUpload";
import { GoLogin } from "./Components/GoLogin";
import { Test } from "./Components/Test";
import { Hard } from "./Components/Hard";
import { Hardest } from "./Components/Hardest";
import { Scorecard } from "./Components/Scorecard";
import { AdminAuth } from "./Components/SignIn/AdminAuth.js";
import { Profile } from "./Components/Profile";
function App() {
  const [cart,setCart]=useState([]);
  const [cost,setCost]=useState(0);
  const [success,setSuccess]=useState(false);
  const [language,setLanguage]=useState("")
  const [useSelectedLayoutSegment,setSelected]=useState(false);
  const [Loogin,setLogin]=useState(true);
  const [loding,setLoading]=useState(false);
  const [user,setUser]=useState({});
  const [Score, setScore]=useState(0);
  const [adminAuth,setAdminAuth]=useState(false);
  return (
    <div className="App">
    <NavBarBoots success={success} setLogin={setLogin} Loogin={Loogin} user={user} adminAuth={adminAuth}/>
    <Routes>
      <Route path="/" element={<Auth setSuccess={setSuccess} />}></Route>
      <Route exact path="/login" element={<Login setSuccess={setSuccess} setLoading={setLoading} setUser={setUser}/>}></Route>
      {!success?<Route exact path="/home" element={<HomeNoAuth/>}/>:
      // loding?<Route exact path="/home" element={<Skeleton/>}/>:
      <>
      <Route path="/home" element={<Search setCart={setCart} cart={cart} setCost={setCost} cost={cost} success={success} setSelected={setSelected} useSelectedLayoutSegment={useSelectedLayoutSegment} setLanguage={setLanguage} language={language} setScore={setScore}/>}></Route>
      <Route exact path="/cart" element={<Cart cart={cart} cost={cost} setCart={setCart} setCost={setCost} />}/>
      <Route exact path="/hard" element={<Hard language={language} number={3} setScore={setScore} Score={Score}/>}></Route>
      <Route exact path="/test" element={<Test language={language} number={7} setScore={setScore} Score={Score} user={user}/>}></Route>
      <Route exact path="/hardest" element={<Hardest language={language} number={7} setScore={setScore} Score={Score} user={user}/>}></Route>
      <Route exact path="/scorecard" element={<Scorecard language={language}/>}></Route>
      <Route exact path="/test" element={<Test language={language}/>}/>
      <Route exact path="/description" element={<Description/>}></Route>
      <Route exact path="/profile" element={<Profile user={user}/>}></Route>
      {!success?<Route exact path="/contact" element={<HomeNoAuth/>}/>:
      <Route exact path="/contact" element={<Contact setCart={setCart} cart={cart} setCost={setCost} cost={cost} success={success}/>}/>
      }
      </>
      }
      <Route exact path="/goLogin" element={<GoLogin/>}/>
      {!adminAuth?<Route exact path="/home" element={<HomeNoAuth/>}/>:<Route exact path="/admin" element={<AdminUpload/>}/>}
      <Route exact path="/adminAuth" element={<AdminAuth setLoading={setLoading} setAdminAuth={setAdminAuth}/>}/>
     </Routes>  
     <Footer/>
    </div>
  );
}

export default App;
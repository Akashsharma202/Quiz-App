import React,{useState} from "react";


export const Profile=(props)=>{
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        marks: {
          java: 0,
          python: 0,
          cpp: 0,
          c: 0,
        },
      });
    
      // Simulate data retrieval (replace with actual data retrieval)
    //   useEffect(() => {
    //     // Replace with code to fetch user data
    //     // Example data (replace with actual user data)
    //   }, []);
    
      return (
        <div className="profile" style={{marginTop:"10%"}}>
          <h2>User Profile</h2>
          <img src={require("./man.png")} style={{width:"100px"}} alt="User Photo" />
    
          <div>
            <p>Username: {props.user.username}</p>
            <p>Email: {props.user.email}</p>
          </div>
    
          
        </div>
      );
}
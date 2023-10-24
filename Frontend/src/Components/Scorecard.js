import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom'
export const Scorecard = (props) => {
    const [data, setData] = useState([]);
    const [Index, setIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://quizserver-app.vercel.app/scorecard/GetScoreCard",{params:{language:props.language}});
                setData(response.data);
                console.log(data);

                if (props.language === 'C') {
                    setIndex(0);
                } else if (props.language === 'CPP') {
                    setIndex(1);
                } else if (props.language === 'Java') {
                    setIndex(2);
                } else {
                    setIndex(3);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
        console.log(data);
    }, []);

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Language</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((Element, index) => (
                        <tr key={index}>
                            <th scope="row">{index+1===1?<img src={require("./gold.png")} style={{width:"30px"}}/>:index+1==2?<img src={require("./silver.png")} style={{width:"30px"}}/>:index+1===3?<img src={require("./bronze.png")} style={{width:"30px"}}/>:index+1}</th>
                            <td>{Element.UserName}</td>
                            <td>{props.language}</td>
                            <td>{Element.Score && Element.Score[Index] !== undefined ? Element.Score[Index] : "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3 style={{color:"black",marginTop:"5%"}}>Try another <NavLink to="/home">
              language
            </NavLink>!!</h3>
        </>
    )
}

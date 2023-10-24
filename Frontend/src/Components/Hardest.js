import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Test.css";
import { NavLink, useNavigate } from 'react-router-dom'
export const Hardest = (props) => {
    const [data, setData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://quizserver-app.vercel.app/question/GetQuestions", {
                    params: { language: props.language, Type: 5, Number: props.number },
                });
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [props.language]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        const currentQuestion = data[currentQuestionIndex];
        if (selectedOption === currentQuestion.Ans) {
            if (currentQuestion.Type === 1) {
                setScore(score + 1);
            } else if (currentQuestion.Type === 5) {
                setScore(score + 5);
                props.setScore(props.Score+5);
            }
        }

        setSelectedOption("");
        if (currentQuestionIndex < data.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert(`Quiz complete! Your score is: ${props.Score}`);
            // You can reset the quiz or navigate to another page here
            console.log(props.language,props.Score,props.user.uid);
            const response=axios.put("http://localhost:5000/scorecard/UpdateScoreCard/",{language:props.language,score:props.Score,userId:props.user.uid});
            navigate("/scorecard");
        }
    };

    return (
        <>
            {data.length > 0 && currentQuestionIndex < data.length ? (
                <div className="quiz-container" key={data[currentQuestionIndex]._id}>
                    <h3 className="question">{data[currentQuestionIndex].Question}</h3>
                    <form>
                        {[
                            data[currentQuestionIndex].Opt1,
                            data[currentQuestionIndex].Opt2,
                            data[currentQuestionIndex].Opt3,
                            data[currentQuestionIndex].Opt4,
                        ].map((option, index) => (
                            <div className="form-check" key={index}>
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="exampleRadios"
                                    id={`exampleRadios${index}`}
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={() => handleOptionSelect(option)}
                                />
                                <label className="form-check-label" htmlFor={`exampleRadios${index}`}>
                                    {option}
                                </label>
                            </div>
                        ))}
                    </form>
                    <button className="next-button" onClick={handleNextQuestion}>Next Question</button>
                </div>
            ) : (
                <p className="quiz-complete">loading...</p>
            )}
        </>
    );
};

import React from 'react';
import "./Description.css"
import { NavLink, useNavigate } from 'react-router-dom'
function Description() {
    const navigate = useNavigate();
  const handleApproveClick = () => {
    // You can add your logic for what happens when the user approves here.
    console.log('User has approved the language selection.');
    navigate("/hard");
  };

  return (
    <div className='Outer'>
      <h1>Language Description</h1>
      <p>
        Thank you for choosing your preferred programming language. Please read
        the disclaimer below before proceeding.
      </p>
      <div className="disclaimer">
        <p>
          This website provides information about various programming languages
          and is for educational purposes only. It does not constitute official
          documentation or endorsement of any language. Users are encouraged to
          refer to official documentation and seek professional guidance for
          programming and development. The test will have 1 point and 5 points questions 
          based on your answers the test will be evaluated and scorecard will be updated.
        </p>
        <span>All the best!</span>
      </div>
      <br/>
      <button onClick={handleApproveClick}>Approve</button>
    </div>
  );
}

export default Description;

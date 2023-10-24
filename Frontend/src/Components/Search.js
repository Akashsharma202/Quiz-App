import React, { useState, useEffect } from 'react';
import "./Search.css";
import { NavLink, useNavigate } from 'react-router-dom'

function LanguageSelectionForm(props) {
  const [selectedLanguage, setSelectedLanguage] = useState('C');
  const navigate = useNavigate();

  useEffect(() => {
    // This effect runs whenever selectedLanguage changes
    console.log(`Selected Language: ${selectedLanguage}`);
    props.setLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // No need to call setLanguage here; it's handled in the useEffect
    console.log(props.language);
    props.setScore(0);
    // console.log(props.useSelectedLayoutSegment);
    navigate("/description");
  };

  return (
    <div className="language-selection-container">
      <h1>Select Your Preferred Programming Language</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Choose a Language:
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="language-select"
          >
            <option value="C">C</option>
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
          </select>
        </label>
        <br />
        <br />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LanguageSelectionForm;

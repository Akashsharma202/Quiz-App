import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AdminUpload.css'; // Import the CSS file for styling
import axios from 'axios';
function AdminUpload() {
  const [formData, setFormData] = useState({
    language: 'CPP',
    Question: '',
    Ans: '',
    Type: 1,
    Opt1: '',
    Opt2: '',
    Opt3: '',
    Opt4: '',
  });

  const handleSubmit = async(event) => {
    event.preventDefault();
    // You can send the form data to your server for processing here
    try{
        const response = await axios.post('https://quizserver-app.vercel.app/uestion/PostQuestions/', formData);
        console.log('Response:', response.data);
        setFormData({language:'C',Question:"",Ans: '',Type: 1,Opt1: '',Opt2: '',Opt3: '',Opt4: '',});
    }catch(error){
        console.error('Error:', error);
    }
    // console.log(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="admin-upload-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Language</Form.Label>
          <Form.Control as="select" name="language" value={formData.language} onChange={handleChange} required>
            <option value="C">C</option>
            <option value="CPP">C++</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Question</Form.Label>
          <Form.Control type="text" name="Question" value={formData.Question} onChange={handleChange} required/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Answer</Form.Label>
          <Form.Control type="text" name="Ans" value={formData.Ans} onChange={handleChange} required/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Type</Form.Label>
          <Form.Check
            type="radio"
            label="1"
            name="Type"
            value={1}
            checked={formData.Type === '1'}
            onChange={handleChange}
          />
          <Form.Check
            type="radio"
            label="5"
            name="Type"
            value={5}
            checked={formData.Type === '5'}
            onChange={handleChange}
          />
        </Form.Group>
<br></br>
        <Form.Group>
          <Form.Label>Options</Form.Label>
          <Form.Control type="text" name="Opt1" value={formData.Opt1} onChange={handleChange} placeholder="Option 1" required/>
          <Form.Control type="text" name="Opt2" value={formData.Opt2} onChange={handleChange} placeholder="Option 2" required/>
          <Form.Control type="text" name="Opt3" value={formData.Opt3} onChange={handleChange} placeholder="Option 3" required/>
          <Form.Control type="text" name="Opt4" value={formData.Opt4} onChange={handleChange} placeholder="Option 4" required/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Upload
        </Button>
      </Form>
    </div>
  );
}

export default AdminUpload;

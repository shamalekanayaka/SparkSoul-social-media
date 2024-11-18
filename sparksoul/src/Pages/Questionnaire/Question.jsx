import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./Question.scss"
import axios from "axios";
import { useLocation } from "react-router-dom";




const Questionnaire = () => {
  const [answers, setAnswers] = useState({
    I: 0,
    E: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");
  const userName = searchParams.get("userName");
  const [submitted, setSubmitted] = useState(false);


  const handleAnswer = (trait, value) => {
    setAnswers({ ...answers, [trait]: value });
  };

  const calculateMBTIType = () => {
    let mbtiType = "";
  
    // Determine I/E based on answers
    mbtiType += answers.I > answers.E ? "I" : "E";
  
    // Determine S/N based on answers
    mbtiType += answers.S > answers.N ? "S" : "N";
  
    // Determine T/F based on answers
    mbtiType += answers.T > answers.F ? "T" : "F";
  
    // Determine J/P based on answers
    mbtiType += answers.J > answers.P ? "J" : "P";
  
    return mbtiType;
  };
  

  const handleSubmit = () => {
    const mbtiType = calculateMBTIType();
    setSubmitted(true);
    
    // Store personality type in the database
    axios.put(`http://localhost:8081/user/${userId}`, { personality: mbtiType })
    .then((response) => {
        // Handle successful storage if needed
    })
    .catch((error) => {
        // Handle error if storage fails
    });
  };

  if (submitted) {
    return <Navigate to={`/result/${calculateMBTIType()}`} />;
  }

  return (
    <div className="questionnaire">
      <h1>Welcome, {userName}!</h1> <br />
      <h3>MBTI Personality Questionnaire</h3>

      {/* Question 1 */}
      <div className="question">
        <p>Do you prefer to focus on the outer world (E) or your own inner world (I)?</p>
        <div>
          <label>
            <input type="radio" name="I/E" value="E" onChange={() => handleAnswer("E", 1)} />
            E
          </label>
          <label>
            <input type="radio" name="I/E" value="I" onChange={() => handleAnswer("I", 1)} />
            I
          </label>
        </div>
      </div>

      {/* Question 2 */}
      <div className="question">
        <p>Do you prefer to focus on the basic information you take in (S) or interpret and add meaning (N)?</p>
        <div>
          <label>
            <input type="radio" name="S/N" value="S" onChange={() => handleAnswer("S", 1)} />
            
          </label>
          <label>
            <input type="radio" name="S/N" value="N" onChange={() => handleAnswer("N", 1)} />
            N
          </label>
        </div>
      </div>

      {/* Question 3 */}
      <div className="question">
        <p>When making decisions, do you prefer to first look at logic and consistency (T) or the people and special circumstances (F)?</p>
        <div>
          <label>
            <input type="radio" name="T/F" value="T" onChange={() => handleAnswer("T", 1)} />
            T
          </label>
          <label>
            <input type="radio" name="T/F" value="F" onChange={() => handleAnswer("F", 1)} />
            F
          </label>
        </div>
      </div>

      {/* Question 4 */}
      <div className="question">
        <p>In dealing with the outside world, do you prefer to get things decided (J) or stay open to new information and options (P)?</p>
        <div>
          <label>
            <input type="radio" name="J/P" value="J" onChange={() => handleAnswer("J", 1)} />
            J
          </label>
          <label>
            <input type="radio" name="J/P" value="P" onChange={() => handleAnswer("P", 1)} />
            P
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Questionnaire;



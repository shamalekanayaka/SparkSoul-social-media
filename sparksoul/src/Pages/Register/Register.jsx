import React, { useState } from "react";
import "./Register.scss"
import { Link, useNavigate } from "react-router-dom";
import SignupValidation from "./RegisterValidation";
import axios from "axios";

const Register = () =>{

    const [values, setValues] = useState({
        name:'',
        email:'',
        username:'',
        password:''
    })

    //personality type
    const [answers, setAnswers] = useState({
        I: 0,
        E: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0,
      })

      const handleAnswer = (trait, value) => {
        setAnswers({ ...answers, [trait]: value });
      };

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }
    

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

    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleSubmit = async (event)=>{
        event.preventDefault();
        setErrors(SignupValidation(values))

        const mbtiType = calculateMBTIType();

        if(errors.name === "" && errors.email === "" && errors.username === "" && errors.password === ""){
            axios.post("http://localhost:8081/register", { ...values, personality: mbtiType })

            .then((res) => {
                // Extract userId and userName from the response data
               // const { userId, userName } = res.data;
                    
                // Redirect to questionnaire page with userId and userName as URL parameters
                //navigate(`/questionnaire?userId=${userId}&userName=${userName}`);

                navigate(`/result/${calculateMBTIType()}/${values.username}`);
                //navigate(`/result/${calculateMBTIType()}`);
            })
            .catch((err) => {
                if (err.response && err.response.status === 409) {
                  // If user already exists, set the error message
                  setErrorMessage("User already exists with this username or email.");
                } else {
                  console.log(err);
                }
            });
        }
    }

    return (
        <div className="register">
            <div className="card">
               <div className="left">
                    <h1 className="heading">Register</h1>
                    <form className="form">
                        <input type="text" placeholder="Name" onChange ={handleInput} className="input" name="name"/><br />
                        {errors.name && <span className="error">{errors.name}</span>}

                        <input type="email" placeholder="Email" onChange ={handleInput} className="input" name="email"/><br />
                        {errors.email && <span className="error">{errors.email}</span>}

                        <input type="text" placeholder="Username" onChange ={handleInput} className="input" name="username"/><br />
                        {errors.username && <span className="error">{errors.username}</span>}

                        <input type="password" placeholder="Password" onChange ={handleInput} className="input" name="password"/><br />
                        {errors.password && <span className="error">{errors.password}</span>}

                        {errorMessage && <span className="error">{errorMessage}</span>} {/* Display error message */}


                        <h4>Help us determine your personality type</h4>
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
                                   S 
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


                        <button className="button" type="submit" onClick={handleSubmit}>Register</button>
                    </form>
                </div> 

                {/*right side */}
                <div className="right">
                    <h1 className="heading">Spark Soul</h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <span className="span">Already have an account?</span><br />
                    <Link to={'/Login'}>
                    <button className="lgnbutton">Login</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}


export default Register


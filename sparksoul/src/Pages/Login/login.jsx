import React, { useState } from "react";
import "./Login.scss"
import { Link } from "react-router-dom";
import validation from "./LoginValidation";
import axios from "axios"; 

const Login = () =>{

    const [values, setValues] = useState({
        username:'',
        password:''
    })

    const handleInput= (event) =>{
        setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
    }

    const [errors, setErrors] = useState({})
    const history = useHistory();

    const handleSubmit = (event)=>{
        event.preventDefault();
        setErrors(validation(values))

        if (!errors.email && !errors.password) {
            // Make a POST request to the backend API endpoint for login
            axios
                .post("http://localhost:8081/login", values)
                .then((res) => {
                    // Handle successful login response
                    const { userId, name, username, personality } = res.data;
                    // You can save user data in the state, context, or local storage for global access
                    // Redirect to the home page or any other desired page after successful login
                    history.push(`/home/${userId}/${username}`);
                })
                .catch((err) => {
                    // Handle login error (invalid credentials, server error, etc.)
                    console.error("Login failed:", err);
                    // Display an error message to the user, e.g., setErrorMessage("Invalid username or password")
                });
        }
    }

    return (
        <div className="login">
            <div className="card">
               <div className="left">
                <h1 className="heading">Spark Soul</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <span className="span">Don't have an account?</span><br />
                <Link to={'/Register'}>
                    <button className="regbutton">Register</button>
                </Link>
                </div> 
                <div className="right">
                    <h1 className="heading">Login</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" onChange ={handleInput} className="input" name="email"/><br />
                        {errors.email && <span className="error">{errors.email}</span>}
                        <input type="password" placeholder="Password" onChange ={handleInput} className="input" name="password"/><br />
                        {errors.password && <span className="error">{errors.password}</span>}
                        <button type="submit" className="button">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login




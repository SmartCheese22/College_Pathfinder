import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import LoginImage from "./Images/1.jpg";
import Logo from "./Images/logo.jpg";
import "./LoginG.css";
import { useDispatch } from 'react-redux';
import { login } from "./actions/authActions";


function LoginG() {
	
	const dispatch = useDispatch();

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate();

	axios.defaults.withCredentials = true;
	// Update your login action to fetch user details after successful login
const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
        alert("All fields are required.");
        return;
    }
    axios.post('http://localhost:3001/loginCollegeG', { email, password })
        .then(result => {
            console.log(result);
            if (result.data.message === "Login Successful") {
                const userData = result.data.user; // Extract user details from response
                dispatch(login(userData));
                // Call API to fetch additional user details and update Redux store
                axios.get(`http://localhost:3001/getUserDetailsByEmail/${email}`)
                    .then(response => {
                        dispatch(updateUserDetails(response.data)); // Update Redux store with additional user details
                        navigate('/home');
                    })
					.catch(err => console.log(err));
					navigate("/home");
            } else if (result.data === "Incorrect password") {
                alert("Invalid password")
            } else if (result.data === "User not found") {
                alert("User not found")
            }
        })
        .catch(err => console.log(err))
};


	return (
		<div className="login-main">
			<div className="login-left" alt="logo">
				<div className="login-left-top">
					<img src={Logo} />
					<h1> College PathFinder</h1>
					<p>Empowering Futures, Guiding Paths : College PathFinder- Your Journey, Your Choice.</p>
				</div>
				<div className="login-left-bottom">
					<img className="login-image" src={LoginImage} alt="illustration" />
				</div>
			</div>
			<div className="login-right">
				<div className="login-right-heading">Login</div>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="email">
							<strong>Email</strong>
						</label>
						<input
							type="email"
							placeholder="Enter Email"
							autoComplete="off"
							name="email"
							className="form-control rounded-0"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="email">
							<strong>Password</strong>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							name="password"
							className="form-control rounded-0"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button type="submit">
						Login
					</button>
				</form>
				<p><strong>Don't have an Account ?</strong></p>
				<Link to='/registerCollegeG'>Sign up</Link>
			</div>
		</div>
	);
}

export default LoginG;
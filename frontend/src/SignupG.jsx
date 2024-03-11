import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./SignupG.css";
import LoginImage from "./Images/1.jpg";
import Logo from "./Images/logo.jpg"

function SignupG() {
	const [name, setName] = useState();
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const [email, setEmail] = useState();
	const [college, setCollege] = useState();
	const [major, setMajor] = useState();
	const [graduationYear, setGraduationYear] = useState();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !username || !password || !email || !college || !major || !graduationYear) {
			alert("All fields are required.");
			return;
		}
		axios.post('http://localhost:3001/registerCollegeG', { name, username, password, email, college, major, graduationYear })
			.then(result => {
				console.log(result);
				navigate('/loginCollegeG');
			})
			.catch(err => console.log(err));
	}

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
				<div className="login-right-heading">Create Account</div>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">
							<strong>Name</strong>
						</label>
						<input
							type="text"
							placeholder="Enter Name"
							autoComplete="off"
							name="name"
							className="form-control rounded-0"
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="username">
							<strong>Username</strong>
						</label>
						<input
							type="text"
							placeholder="Enter Username"
							autoComplete="off"
							name="username"
							className="form-control rounded-0"
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="password">
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
					<div>
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
					<div>
						<label htmlFor="college">
							<strong>College</strong>
						</label>
						<input
							type="text"
							placeholder="Enter College"
							autoComplete="off"
							name="college"
							className="form-control rounded-0"
							onChange={(e) => setCollege(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="major">
							<strong>Major</strong>
						</label>
						<input
							type="text"
							placeholder="Enter Major"
							autoComplete="off"
							name="major"
							className="form-control rounded-0"
							onChange={(e) => setMajor(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor="graduationYear">
							<strong>Graduation Year</strong>
						</label>
						<input
							type="text"
							placeholder="Enter Graduation Year"
							autoComplete="off"
							name="graduationYear"
							className="form-control rounded-0"
							onChange={(e) => setGraduationYear(e.target.value)}
						/>
					</div>
					<button type="submit" >
						Create Account
					</button>
				</form>
				<p>
					<strong>Already Have an Account?</strong> <Link to="/loginCollegeG"> Login </Link>
				</p>
			</div>
		</div>
	);
}

export default SignupG;

import { Link } from 'react-router-dom';
import LoginImage from "./Images/1.jpg";
import Logo from "./Images/logo.jpg";
import "./Login.css";

function Login() {
    return (
        <div className="login-main">
            <div className="login-left">
                <div className="login-left-top">
                    <img src={Logo} alt="logo" />
                    <h1> College PathFinder</h1>
                    <p>Empowering Futures, Guiding Paths : College PathFinder- Your Journey, Your Choice.</p>
                </div>
                <div className="login-left-bottom">
                    <img className="login-image" src={LoginImage} alt="illustration" />
                </div>
            </div>
            <div className="login-right">
                <div className="login-right-heading">Login</div>
                <div>
                    <Link to='/loginCollegeS'>
                        <button className="login-button" src='/loginCollegeS'>CollegeS Login</button>
                    </Link>
                </div>
                <div>
                    <Link to='/loginCollegeG'>
                        <button className="login-button" src='/loginCollegeG'>CollegeG Login</button>
                    </Link>
                </div>
                <div>
                    <Link to='/adminlogin'>
                        <button className="login-button" src='/adminLogin' >Admin Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;

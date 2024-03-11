import { Link } from "react-router-dom";
import "./Nav.css";
import {FaShoppingBag, FaSearch} from "react-icons/fa";
import logo from "./Images/logo.jpg";

const Nav = () => {
    return(
        <nav className="Nav">
            <ul>
                <li className="nav-item"> <Link to="/home"><img src={logo} alt="" style={{width: "3rem"}}/></Link></li>
                <li className="nav-item"><Link to="/home">Home</Link></li>
                <li className="nav-item"><Link to="/forum">Forum</Link></li>
                <li className="nav-item"><Link to="/search">Search</Link></li>
                <li className="nav-item"><Link to="/compare">Compare</Link></li>
                <li className="nav-item"><Link to="/collegepredictor">College predictor</Link></li>
                <li className="nav-item"><Link to="/profile">Profile</Link></li>
                <li className="nav-item"><Link to="/setting">Settings <FaSearch /></Link></li>
                <li className="log_out"><Link to="/logout">Log Out </Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
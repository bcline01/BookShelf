import logo from '../assets/logo.png';
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../utils/auth"; // Adjust the import path as necessary
import '../pages/css/Header.css';



export default function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
      navigate("/login");
      auth.logout();
    };
    return (
        <header className="d-flex justify-content-between align-items-center px-4 mb-5">
        <img className="logo" src={logo} alt="Bookpage logo" />
        <div className="d-flex align-items-center gap-4">
            <ul className="d-flex gap-4"> 
              <li>
                <NavLink className= "nav" to="/search">Search</NavLink>
              </li>
              <li>
                <NavLink className= "nav" to="/library">Library</NavLink>
              </li>
              <li>
                <NavLink className= "nav" to="/favorites">Favorites</NavLink>
              </li>
              <li>
                <NavLink className= "nav" to="/bestsellers">Best Sellers</NavLink>
              </li>
            </ul>
            <button className="logoutBtn" onClick={handleLogout}>
              Logout
            </button>
            </div>
        </header>

    );
  }
import './css/Home.css';
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <section id="hero">
      <div className="hero-content">
        <NavLink to="/login" className="cta-button">LogIn</NavLink>
      </div>
    </section>
  );
}
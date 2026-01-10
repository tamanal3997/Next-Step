import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import myPic from "../../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="second">
          <img src={myPic} alt="Logo" className="logo-img" />

          <div className="logo-text">
            <h4 className="logo">Next Step</h4>
            <h1 className="text">Career Assistance</h1>
          </div>
        </div>


        <ul className="nav-menu">

          <li className="ai-nav">
            <Link to="/ai-assistant" className="ai-link">
              AI Assistant
            </Link>
          </li>


          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/career-path">Career Path</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>


        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          ☰
        </div>
      </nav>


      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={() => setMenuOpen(false)}>✕</span>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/career-path" onClick={() => setMenuOpen(false)}>Career Path</Link>
        <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </>
  );
}

export default Navbar;

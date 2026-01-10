import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import myone from "../../../assets/logo.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">
          Next Step <span>  Career Assistance</span>
        </h3>
         <img src={myone} alt="Logo" className="img" />

         <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/career-path">Career Path</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      </div>

      <div className="footer-bottom">
        © 2025–2026 Next Step Career Assistance | Developed by Tamana
      </div>
    </footer>
  );
}

export default Footer

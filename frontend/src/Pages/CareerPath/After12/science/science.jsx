import "./Science.css";
import { useNavigate } from "react-router-dom";


function Science() {
    const navigate = useNavigate();
  return (
    <div className="science-page">
      <h1>Career Options after 12th<span> Science</span></h1>
      <p className="intro">
        Science stream offers technical, medical, and research-oriented careers.
      </p>
      {/* BACK ARROW */}
      <div className="back-arrow" onClick={() => navigate("/career-path/after-12")}>
        ← Back
      </div>

      <div className="science-cards">
        <div className="science-card">
          <h3>Engineering</h3>
          <p>B.Tech / BE in CSE, IT, Mechanical, Civil, etc.</p>
        </div>

        <div className="science-card">
          <h3>Medical</h3>
          <p>MBBS, BDS, Nursing, Pharmacy, Physiotherapy.</p>
        </div>

        <div className="science-card">
          <h3>IT & Software</h3>
          <p>BCA, BSc IT, Data Science, AI & ML.</p>
        </div>

        <div className="science-card">
          <h3>Research</h3>
          <p>BSc, MSc, ISRO, DRDO, Scientific fields.</p>
        </div>
      </div>
    </div>
  );
}

export default Science;

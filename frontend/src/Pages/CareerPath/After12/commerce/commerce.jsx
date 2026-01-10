import "./Commerce.css";
import { useNavigate } from "react-router-dom";


function Commerce() {
    const navigate = useNavigate();
  return (
    
    <div className="commerce-page">
      <h1>Career Options after 12th <span>Commerce</span></h1>
      <p className="intro">
        Commerce stream focuses on business, finance, and management careers.
      </p>
      {/* BACK ARROW */}
      <div className="back-arrow" onClick={() => navigate("/career-path/after-12")}>
        ← Back
      </div>

      <div className="commerce-cards">
        <div className="commerce-card">
          <h3>Chartered Accountant (CA)</h3>
          <p>Accounting, auditing, taxation.</p>
        </div>

        <div className="commerce-card">
          <h3>BBA / MBA</h3>
          <p>Management, marketing, HR.</p>
        </div>

        <div className="commerce-card">
          <h3>Banking & Finance</h3>
          <p>Bank PO, CFA, Investment banking.</p>
        </div>

        <div className="commerce-card">
          <h3>Company Secretary</h3>
          <p>Corporate law & compliance.</p>
        </div>
      </div>
    </div>
  );
}

export default Commerce;

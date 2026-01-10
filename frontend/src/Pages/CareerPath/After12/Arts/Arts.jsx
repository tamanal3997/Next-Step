import "./Arts.css";
import { useNavigate } from "react-router-dom";


function Arts() {
    const navigate = useNavigate();
  return (
    <div className="arts-page">
        
      <h1>Career Options after 12th <span>Arts</span></h1>
      <p className="intro">
        Arts stream opens creative, administrative, and social careers.
      </p>
     {/* BACK ARROW */}
      <div className="back-arrow" onClick={() => navigate("/career-path/after-12")}>
        ← Back
      </div>
      <div className="arts-cards">
        <div className="arts-card">
          <h3>Civil Services</h3>
          <p>UPSC, State PSC, Government jobs.</p>
        </div>

        <div className="arts-card">
          <h3>Media & Journalism</h3>
          <p>News, content creation, reporting.</p>
        </div>

        <div className="arts-card">
          <h3>Design & Animation</h3>
          <p>Fashion, graphic, UI/UX design.</p>
        </div>

        <div className="arts-card">
          <h3>Teaching</h3>
          <p>BA, B.Ed, Lecturer, Professor.</p>
        </div>
      </div>
    </div>
  );
}

export default Arts;

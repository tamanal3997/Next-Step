import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./AfterGraduation.css";

function AfterGraduation() {
  const navigate = useNavigate();

  return (
    <div className="after-grad">

      {/* BACK ARROW */}
     

      <h1>Career Options After <span>Graduation</span></h1>
      <p className="sub-text">
        Explore higher studies, government exams, private jobs, and
        skill-based career opportunities after completing graduation.
      </p>
       <button
        className="common-back-btn"
        onClick={() => navigate("/career-path")}
      >
        Back to Career Path
      </button>
      <div className="grad-cards">

        <div className="grad-card">
          <h3>Higher Studies</h3>
          <p>MBA, MCA, M.Tech, M.Sc, MA and more.</p>
        </div>

        <div className="grad-card">
          <h3>Government Jobs</h3>
          <p>UPSC, SSC, Banking, Defence, Teaching.</p>
        </div>

        <div className="grad-card">
          <h3>Private Sector</h3>
          <p>IT companies, Corporate roles, MNCs.</p>
        </div>

        <div className="grad-card">
          <h3>Skill Based Careers</h3>
          <p>Freelancing, Digital Marketing, Startups.</p>
        </div>

      </div>
    </div>
  );
}

export default AfterGraduation;

import { Link } from "react-router-dom";
import "./After12.css";
import { useNavigate } from "react-router-dom";

function After12() {
  const navigate = useNavigate();
  return (
    <div className="after12">

      {/* HEADER */}
      <section className="after12-header">
        <h1>Career Options  <span>After 12th</span></h1>
        <p>
          Choosing the right career after 12th is a crucial step.
          Explore stream-wise career paths to make an informed decision.
        </p>
      </section>
      <button
        className="back-btn"
        onClick={() => navigate("/career-path")}
        > Back to Career Path</button>

      {/* STREAM CARDS */}
      <section className="after12-cards">

        {/* SCIENCE */}
        <div className="stream-card">
          <h2>Science Stream</h2>
          <p>
            Ideal for students interested in technology, medicine,
            research, and <br />
            innovation.
          </p>
          <ul>
            <li>Engineering</li>
            <li>Medical</li>
            <li>IT & Computer Science</li>
            <li>Research Fields</li>
          </ul>
          <Link to="/career-path/after-12/science">
            <button>Explore Science</button>
          </Link>
        </div>

        {/* COMMERCE */}
        <div className="stream-card">
          <h2>Commerce Stream</h2>
          <p>
            Best for students inclined towards business, finance,
            management, and economics.
          </p>
          <ul>
            <li>CA / CS / CMA</li>
            <li>Business & Management</li>
            <li>Finance & Banking</li>
            <li>Entrepreneurship</li>
          </ul>
          <Link to="/career-path/after-12/commerce">
            <button>Explore Commerce</button>
          </Link>
        </div>

        {/* ARTS */}
        <div className="stream-card">
          <h2>Arts Stream</h2>
          <p>
            Suitable for creative minds interested in humanities,
            social sciences, and public services.
          </p>
          <ul>
            <li>Media & Journalism</li>
            <li>Psychology</li>
            <li>Government Exams</li>
            <li>Design & Arts</li>
          </ul>
          <Link to="/career-path/after-12/arts">
            <button>Explore Arts</button>
          </Link>
        </div>

      </section>

    </div>
  );
}

export default After12;

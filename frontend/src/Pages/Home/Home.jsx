import "./Home.css";
import image from "../../assets/image.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        {/* LEFT CONTENT */}
        <div className="hero-text">
          <h1>
            Find Your <span>Next Step</span><br />in Your Career
          </h1>

          <p>
            A simple and reliable career guidance platform to help students
            choose the right path after 12th and graduation.
          </p>

          <Link to="/career-path">
            <button className="hero-btn">Explore Career Paths</button>
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-animation">
          <img src={image} alt="Career Illustration" className="hero-img" />
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="why">
        <h2>Why Next Step Career Assistance?</h2>
        <p>
          Many students feel confused about career choices due to lack of
          proper guidance. This platform provides clear, structured, and
          easy-to-understand career information.
        </p>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <h3>Career After 12th</h3>
          <p>Explore stream-wise career options with clarity.</p>
        </div>

        <div className="feature-card">
          <h3>Career After Graduation</h3>
          <p>Understand higher studies, jobs, and competitive exams.</p>
        </div>

        <div className="feature-card">
          <h3>Guided Planning</h3>
          <p>Step-by-step guidance to plan your future effectively.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Your Career Journey Today</h2>
        <Link to="/career-path">
          <button className="cta-btn">Get Started</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;

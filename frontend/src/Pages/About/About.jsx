import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        
        <h2 className="about-title">
          About <span>Next Step</span>
        </h2>

       
        <p className="about-description">
          Next Step – Career Assistance is a student-focused platform designed to
          help individuals make informed career decisions. We aim to simplify
          career planning by providing clear guidance, skill direction, and
          professional insights for students and freshers.
        </p>

       
        <div className="about-cards">

          <div className="about-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To guide students with reliable career information and help them
              discover paths that match their skills, interests, and goals.
            </p>
          </div>

          <div className="about-card">
            <h3>🌟 Our Vision</h3>
            <p>
              To become a trusted career guidance platform empowering learners
              to build confidence, clarity, and long-term success.
            </p>
          </div>

          <div className="about-card">
            <h3>💼 What We Offer</h3>
            <p>
              Career guidance, skill recommendations, portfolio support, and
              structured career paths for future growth.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;

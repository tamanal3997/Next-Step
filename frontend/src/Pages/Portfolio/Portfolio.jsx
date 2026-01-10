import "./Portfolio.css";
import profile from "../../assets/profile.jpg"; 
import project1 from "../../assets/1.jpg";
import project2 from "../../assets/2.jpg";
import project3 from "../../assets/3.jpg";

function Portfolio() {
  return (
    <div className="portfolio">

      {/* HERO SECTION */}
      <section className="portfolio-hero">
        <img src={profile} alt="Tamana" className="profile-img" />
        <h1>Hello, I’m <span>Tamana</span></h1>
        <p>
          BCA Final Year Student | Frontend Developer  
          Passionate about building user-friendly web applications.
        </p>
      </section>

      {/* ABOUT ME */}
      <section className="portfolio-about">
        <h2>About Me</h2>
        <p>
          I am a motivated and detail-oriented BCA fresher with strong
          fundamentals in programming and database management. I have basic
          knowledge of MERN stack technologies like HTML, CSS, JavaScript, and
          React. My goal is to start my career in IT and grow professionally
          through continuous learning.
        </p>
      </section>

      {/* SKILLS */}
      <section className="portfolio-skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Technical Skills</h3>
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Git & GitHub (Basics)</li>
              <li>Computer Fundamentals</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Interpersonal Skills</h3>
            <ul>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Problem Solving</li>
              <li>Leadership</li>
              <li>Creativity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="portfolio-projects">
        <h2>Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <img src={project1} alt="1.jpg" />
            <h3>Book Nest App</h3>
            <p>
              A Flutter-based application for exchanging, donating, and selling
              books. Internship project.
            </p>
          </div>

          <div className="project-card">
            <img src={project2} alt="2.jpg" />
            <h3>Amazon Clone</h3>
            <p>
              A React-based e-commerce website with cart functionality and UI
              similar to Amazon.
            </p>
          </div>

          <div className="project-card">
            <img src={project3} alt="3.jpg" />
            <h3>Portfolio Website</h3>
            <p>
              A personal portfolio website built using React and CSS showcasing
              my skills and projects.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Portfolio;

import { Link } from "react-router-dom";
import "./CareerPath.css";

function CareerPath() {
  return (
    <div className="career-path">

      
      <section className="career-header">
        <h1>Explore <span>Career Paths</span></h1>
        <p>
          <p>
    Making the right career choice is one of the most important decisions of your life.
    At <strong>Next Step – Career Assistance</strong>, we help you explore multiple career
    paths based on your education level, interests, skills, and future goals.
    <br /> <br />
    Whether you are confused after 12th, planning your journey after graduation,
    or looking for skill-based opportunities, we provide clear guidance to help
    you move forward with confidence.
  </p>
        </p>
      </section>

      
      <section className="career-cards">

        <div className="career-card">
          <h2>After 12th</h2>
          <p>
            Explore career options available after completing 12th in Science,
            Commerce,Arts.
          </p>
          <Link to="/career-path/after-12">
            <button>Explore Options</button>
          </Link>
        </div>

        <div className="career-card">
          <h2>After Graduation</h2>
          <p>
            Discover higher studies , job opportunities ,
             and professional courses
            after graduation.
          </p>
          <Link to="/career-path/after-graduation">
            <button>Explore Options</button>
          </Link>
        </div>

        <div className="career-card">
          <h2>Skill-Based Careers</h2>
          <p>
            Learn about freelancing, entrepreneurship, and skill-based career
            paths.
          </p>
          <button disabled>Coming Soon</button>
        </div>
        <div className="floating-icons">
  <span className="icon icon1">🎓</span>
  <span className="icon icon2">💼</span>
  <span className="icon icon3">📚</span>
 
  <span className="icon icon5">🚀</span>
</div>


      </section>

    </div>
  );
}

export default CareerPath;

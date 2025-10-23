
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
        <Link to='/'>Go to Home</Link>
      <h1>About Page</h1>
      <p>This is the about page of the application.</p>
    </div>
  );
}

export default About;
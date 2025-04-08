import Lottie from 'lottie-react';
import aboutAnimation from '../assets/about-animation.json';

function About() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div className="lottie-container">
        <Lottie
          animationData={aboutAnimation}
          className="lottie-animation"
        />
      </div>
      <h1>About TaskBoard</h1>
      <p>
        TaskBoard is a simple and intuitive task management application that helps you
        organize and track your tasks effectively. With features like task creation,
        editing, and status tracking, TaskBoard makes it easy to stay on top of your
        work and personal projects.
      </p>
    </div>
  );
}

export default About;
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function About() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
     <div className="lottie-container">
        <DotLottieReact
          src="https://lottie.host/ce92898e-fb1d-4e4a-b833-91b1df8142be/uHadhB3Y7v.lottie"
          loop
          autoplay
         className="lottie-animation"
        />
      </div>
      <h1>About TaskBoard</h1>
      <p>
        TaskBoard is a simple and intuitive task management application that
        helps you organize and track your tasks effectively. With features like
        task creation, editing, and status tracking, TaskBoard makes it easy to
        stay on top of your work and personal projects.
      </p>
    </div>
  );
}

export default About;

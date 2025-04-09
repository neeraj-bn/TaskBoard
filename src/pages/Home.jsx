import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div className="lottie-container">
        <DotLottieReact
          src="https://lottie.host/1e2010f2-4820-4a00-8f29-95bfc4d383f3/oyW9q8b8K6.lottie"
          loop
          autoplay
          className="lottie-animation"
        />
      </div>
      <h1>Welcome to TaskBoard</h1>
      <p>
        Manage your tasks efficiently with our simple and intuitive task
        management system.
      </p>
      <p style={{ marginTop: "20px" }}>
        Ready to get started? <Link to="/tasks">Go to Tasks</Link>
      </p>
    </div>
  );
}

export default Home;

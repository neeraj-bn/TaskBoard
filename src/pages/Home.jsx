import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import welcomeAnimation from '../assets/welcome-animation.json';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div className="lottie-container">
        <Lottie
          animationData={welcomeAnimation}
          className="lottie-animation"
        />
      </div>
      <h1>Welcome to TaskBoard</h1>
      <p>Manage your tasks efficiently with our simple and intuitive task management system.</p>
      <p style={{ marginTop: '20px' }}>
        Ready to get started? <Link to="/tasks">Go to Tasks</Link>
      </p>
    </div>
  );
}

export default Home;
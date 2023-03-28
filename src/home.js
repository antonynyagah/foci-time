import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <h1>Welcome to the Pomodoro Timer</h1>
      <p>A Pomodoro timer is a tool that helps you manage your time and increase productivity.</p>
      <p>It works by breaking down your work into short intervals (usually 25 minutes) followed by a short break (usually 5 minutes). With Foci Time you can configure how long you want your timer/break timer to be!</p>
      <p>By using a Pomodoro timer, you can improve your focus, avoid burnout, and increase discipline.</p>
      <Link to="./App">
        <button>Get Started</button>
      </Link>
      
    </div>
  );
}

export default Home;

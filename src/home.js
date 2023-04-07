import { Link } from "react-router-dom";


function Home() {
  
  const playNotificationSound = () => {
    const audio = new Audio('https://audio.jukehost.co.uk/4D2Yj0Xx5CbBWItxIHdB0Xo9VAzrxb1V');
    audio.play();
  };
  
  return (
    <div class="Home" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '60px 60px'
    }}>
      <h1>Welcome to Foci Time!</h1>
      <p> Foci Time is a tool that uses a Pomodoro timer that helps you manage your time and increase productivity.
      It works by breaking down your work into short intervals (usually 25 minutes or however long you wish) followed by a short break (usually 5 minutes). 
      With Foci Time you can configure how long you want your timer/break timer to be!
      By using a Pomodoro timer, you can improve your focus, avoid burnout, and increase discipline.
      </p>

      <br></br>

      <p> *Stay tuned as more features for foci time will come to life in due time!*</p>
      
      <Link to="./App">
        <button style={{ cursor: 'pointer', borderRadius: '18px' }} onClick={playNotificationSound}>Get Started</button>
      </Link>
      
    </div>
  );
}


export default Home;

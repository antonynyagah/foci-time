import React, { useState, useEffect } from 'react';


function BreakTimer() {
  const [time, setTime] = useState(60);
  const [timerOn, setTimerOn] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  const [prevTime, setPrevTime] = useState(3);
  const [configuredTime, setConfiguredTime] = useState(60);
  
  useEffect(() => {
    let interval;
  
    if (timerOn && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
  
    // Adding timer in browser tab
    document.title = `Timer: ${formatTime(time)}`;
  
    return () => clearInterval(interval);
  }, [timerOn, time]);
  
  useEffect(() => {
    if (time === 0) {
      console.log('Time is up!');
      if (Notification.permission === "granted") {
        console.log('Notification permission is granted.');
        const options = {
          body: "Time's up!",
          icon: "./timeisup.jpg"
        };
        new Notification("Time's up!", options);
        const audio = new Audio("https://audio.jukehost.co.uk/p4eEugXcK27E2y5ktTqzM4qDL65IuVbO"); // replace with the path to your sound file
        audio.play().then(() => {
          console.log('Audio played successfully.');
        }).catch((error) => {
          console.error('Error playing audio:', error);
        });
      } else if (Notification.permission !== "denied") {
        console.log('Notification permission is not granted. Requesting permission...');
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            console.log('Notification permission granted.');
            const options = {
              body: "Time's up!",
              icon: "/path/to/your/image.png"
            };
            new Notification("Time's up!", options);
            const audio = new Audio("https://audio.jukehost.co.uk/p4eEugXcK27E2y5ktTqzM4qDL65IuVbO"); // replace with the path to your sound file
            audio.play().then(() => {
              console.log('Audio played successfully.');
            }).catch((error) => {
              console.error('Error playing audio:', error);
            });
          } else {
            console.log('Notification permission denied.');
          }
        });
      } else {
        console.log('Notification permission denied.');
      }
      setTimerOn(false);
    }
  }, [time]);
  
  
  const startTimer = () => {
    setTimerOn(true);
  };

  const stopTimer = () => {
    setTime(configuredTime);
    setTimerOn(false);
    setTimerPaused(false);
  };

  const pauseTimer = () => {
    setTimerOn(false);
    setTimerPaused(true);
    setPrevTime(time);
  };

  const resumeTimer = () => {
    setTimerOn(true);
    setTimerPaused(false);
    setTime(prevTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleConfigure = () => {
    const newTime = prompt('Enter the length of time in minutes:', configuredTime / 60);
    if (newTime !== null) {
      const parsedNewTime = parseInt(newTime);
      if (isNaN(parsedNewTime)) {
        alert('Please enter a valid number.');
      } else {
        setConfiguredTime(parsedNewTime * 60);
        setTime(parsedNewTime * 60);
      }
    }
  };




  return (
    <div className='timer'>

        <h1>Breaker Timer</h1>
        <h1>{formatTime(time)}</h1>
        <audio id="notificationSound" src="https://audio.jukehost.co.uk/4D2Yj0Xx5CbBWItxIHdB0Xo9VAzrxb1V"></audio>
        
        <button button style={{ cursor: 'pointer', borderRadius: '18px' }} onClick={() => {
          handleConfigure();document.getElementById('notificationSound').play();}}>Configure</button>
          
        {!timerOn && !timerPaused && time === configuredTime && (<button button style={{ cursor: 'pointer', borderRadius: '18px', marginLeft: '10px'  }} onClick={() => {
        startTimer();document.getElementById('notificationSound').play(); }}>Start</button>
        
        )}
        
        {timerOn && (
          <button button style={{ cursor: 'pointer', borderRadius: '18px' }} onClick={() => {
            pauseTimer();document.getElementById('notificationSound').play(); }}>Pause</button>
        )}

        {timerPaused && (
          <button button style={{ cursor: 'pointer', borderRadius: '18px' }} onClick={() => {
            resumeTimer();document.getElementById('notificationSound').play(); }}>Resume</button>
        )}

        {(timerOn || timerPaused) && (
          <button button style={{ cursor: 'pointer', borderRadius: '18px' }} onClick={() => {
            stopTimer();document.getElementById('notificationSound').play(); }}>Stop</button>
        )}

        {time === 0 && (
          <button button style={{ cursor: 'pointer', borderRadius: '18px' }} onClick={() => {
            setTime(configuredTime);
            setTimerOn(false);
            setTimerPaused(false);
          }}>Restart</button>
  )}
    </div>
  );
}
export default BreakTimer;




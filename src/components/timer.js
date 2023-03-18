import React, { useState, useEffect } from 'react';

function Timer() {
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

    return () => clearInterval(interval);
  }, [timerOn, time]);

  useEffect(() => {
    if (time === 0) {
      if (Notification.permission === "granted") {
        new Notification("Time's up!");
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification("Time's up!");
          }
        });
      }
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
    const newTime = prompt('Enter the timer duration in minutes:', configuredTime / 60);
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

  const handleCancel = () => {
    setConfiguredTime(time);
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <button onClick={handleConfigure}>Configure</button>
      {!timerOn && !timerPaused && time === configuredTime && (
        <button onClick={startTimer}>Start</button>
      )}
      {timerOn && (
        <button onClick={pauseTimer}>Pause</button>
      )}
      {timerPaused && (
        <button onClick={resumeTimer}>Resume</button>
      )}
      {(time === 0 || timerOn || timerPaused) && (
        <button onClick={stopTimer}>Stop</button>
      )}
      {time === 0 && (
        <button onClick={() => {
          setTime(configuredTime);
          setTimerOn(false);
          setTimerPaused(false);
        }}>Restart</button>
      )}
      {configuredTime !== time && (
        <div>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={() => setPrevTime(configuredTime)}>Save</button>
        </div>
      )}
    </div>
  );
}

export default Timer;


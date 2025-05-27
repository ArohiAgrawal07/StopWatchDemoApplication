import { useState, useEffect } from 'react';
import Button from './Button';
import { formatTime } from '../utils/formatTime';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="time-display">{formatTime(time)}</div>
      <div className="buttons">
      {!isRunning ? (
        <button className="start-btn" onClick={handleStart}>Start</button>
      ) : (
        <button className="pause-btn" onClick={handlePause}>Pause</button>
      )}
      <button className="reset-btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
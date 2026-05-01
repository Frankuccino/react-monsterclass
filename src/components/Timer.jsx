import { useRef, useState } from "react";

const Timer = () => {
  const timerId = useRef();
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    if (timerId.current) return;

    timerId.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };

  return (
    <div>
      <h2>Time Elapsed: {seconds}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button
        onClick={() => {
          stopTimer();
          setSeconds(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;

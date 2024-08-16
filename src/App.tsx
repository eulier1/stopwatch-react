import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);

  let timeoutRef = useRef(0);

  let secondPassed = 0;

  function handleStart() {
    setStartTime(Date.now());

    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }

    timeoutRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(timeoutRef.current);
    setNow(null);
  }

  if (startTime !== null && now !== null) {
    secondPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Stopwatch {secondPassed.toFixed(2)} </h1>
      <div className="card">
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;

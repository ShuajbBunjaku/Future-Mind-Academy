import "./Counter.css";
import { useState, useEffect } from "react";

function Counter() {
  const [running, setRunning] = useState(false);
  const [counter, setCounter] = useState(0);
  const [miliseconds, setMiliseconds] = useState(0);

  useEffect(() => {
    if (!running) return;

    let startTime = Date.now();

    let intervalMiniId = setInterval(() => {
      let goingTime = Date.now();
      let elapsedTime = goingTime - startTime;

      setMiliseconds(elapsedTime % 1000);

      if (elapsedTime >= 1000) {
        setCounter((counter) => counter + 1);
        startTime += 1000;
      }
    }, 10);

    return () => {
      clearInterval(intervalMiniId);
    };
  }, [running]);

  return (
    <>
      <div className="Counter-Container">
        <h1>
          {counter}:{miliseconds}
        </h1>
        <button
          className="Counter-Toggle"
          onClick={() => {
            setRunning((running) => !running);
          }}
        >
          {running ? "Stop" : "Start"}
        </button>
      </div>
    </>
  );
}

export default Counter;

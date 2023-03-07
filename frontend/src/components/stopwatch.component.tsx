import React, { useState, useEffect } from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
      let interval: any;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);
    return (
      <div className="stopwatch">
        <div className="numbers">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </div>
        <div className="buttons">
          
          <button onClick={(e) => {
            setRunning(true)
            e.preventDefault()
            }}>Iniciar</button>

          <button onClick={(e) => {
            setRunning(false)
            e.preventDefault()
            }}>Pausar</button>   

        </div>
      </div>
    );
  };

export default Stopwatch;
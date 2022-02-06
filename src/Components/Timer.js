import React from "react";
import './Timer.css';
function Timer({ counter, score, highScore }) {
  return (
    <div className="timecss">
      <div className="col text-center timeleft">
        <div className="align-self-center">
          Seconds left: <span>{counter + "s"}</span>
        </div>
      </div>

      <div className="col text-right mr-5 score">
        <div>
          Score: <span>{score}</span>
        </div>

        <div>
          High Score: <span>{highScore}</span>
        </div>
      </div>
    </div>
  );
}
export default Timer;

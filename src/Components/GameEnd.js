import './GameEnd.css';
function GameEnd({ score, highScore, onStart }) {
  return (
    <div className="gecss">
      <h3 className="text-dark">Time-up!</h3>
      <p className="final-score mb-4">
        Your Score: {score} <br /> Your highest Score: {highScore}
      </p>
      <button className="btn btn-dark" onClick={onStart}>
        Start again
      </button>
    </div>
  );
}

export default GameEnd;

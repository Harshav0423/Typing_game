import './StartGame.css';
function StartGame({ onStart }) {
  return (
    <div className="sgcss">
      <p className="text-dark mt-5 mb-3 start-text">
        Once you start the game, type the word <br /> that you see and keep
        going
      </p>
      <br></br>
      <button className="button button-start" onClick={onStart}>
        Start
      </button>
    </div>
  );
}

export default StartGame;

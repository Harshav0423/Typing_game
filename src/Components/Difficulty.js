import React from "react";

function Difficulty({onChange,difficultylevel}) {
  function handleReset() {
    localStorage.setItem('level', 'medium');
    localStorage.setItem('highscore', 0);
    window.location.reload();
  }
  return (
    <div className="top">
      <select onChange={onChange} id="select" value={difficultylevel}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button className="button button-reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Difficulty;

import React from "react";
import './Input.css';
function Input({ onChange }) {
  return (
    <div className="inputcss">
      <input
        type="text"
        className="input mt-1"
        placeholder="start typing the given word.."
        onChange={onChange}
        autoFocus
      />
    </div>
  );
}
export default Input;
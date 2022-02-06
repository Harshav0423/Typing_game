import React, { useCallback, useEffect, useState } from "react";
import wordList from "./WordList";
import Word from "./Word";
import Input from "./Input";
import Timer from "./Timer";
import Difficulty from "./Difficulty";
import StartGame from "./StartGame";
import GameEnd from "./GameEnd";

function Home() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    localStorage.getItem('highscore') || 0
  );

  const [counter, setCounter] = useState(5);
  const [timer, setTimer] = useState('');
  const [mount, setMount] = useState(true);
  const [level, setLevel] = useState(localStorage.getItem('level') || 'medium');
  const [increment, setIncrement] = useState(incrementChange(level));
  const [word, setWord] = useState(selectWord());

  const updateHighScore = useCallback(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('highscore', score);
    }
  }, [score, highScore]);

  useEffect(() => {
    if (!mount) {
      setMount(true);
      ticker();
    }
    if (counter === 0) {
      clearInterval(timer);
      updateHighScore();
    }
  }, [counter, mount, timer, updateHighScore]);

  function ticker() {
    const interval = setInterval(() => {
      setCounter((prevCount) => prevCount - 1);
    }, 1000);
    setTimer(interval);
  }

  function handleChange({ currentTarget: input }) {
    const typedText = input.value;
    if (typedText === word) {
      setWord(selectWord()); // calling new word
      setScore((prevScore) => prevScore + 1);
      input.value = ''; // clearing input
      setCounter((prevCount) => prevCount + increment);
    }
  }
  function incrementChange(type) {
    const bonustime = type === "hard" ? 1 : type === "medium" ? 2 : 3;
    return bonustime;
  }

  function difficultychange({ currentTarget: option }) {
    const bonustime = incrementChange(option.value);
    const difficultylevel = option.value;
    localStorage.setItem('level', difficultylevel);

    setIncrement(bonustime);
    setLevel(difficultylevel);
    setWord(selectWord());
  }
  function selectWord() {
    const list = wordList[level];
    const item = Math.floor(Math.random() * list.length);
    // console.log(list[item]);
    return list[item];
  }

  function handleStart() {
    setMount(false);
    setCounter(5);
    setScore(0);
  }

  return (
    <div className="container">
      <div className="container-body">
        <Difficulty onChange={difficultychange} difficultylevel={level} />
        <h1 className="title">Typing test..</h1>
        {counter === 0 ? (
          <GameEnd score={score} highScore={highScore} onStart={handleStart} />
        ) : mount === true && !timer ? (
          <StartGame onStart={handleStart} />
        ) : (
          <>
            <Timer
              score={score}
              counter={counter}
              highScore={highScore}
            ></Timer>
            <Word word={word} />
            <Input onChange={handleChange} />
          </>
        )}
      </div>
    </div>
  );
}
export default Home;

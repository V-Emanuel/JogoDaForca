import React, { useState } from "react";
import Jogo from "./Jogo.js"
import Chute from "./Chute";
import Letras from "./Letras";

export default function App() {
  const [word, setWord] = useState("");
  const [arrayWord, setArrayWord] = useState([]);
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const [selectedLetters, setSelectedLetters] = useState([])
  const [attempt, setAttempt] = React.useState("");
  let rightWord = [];
  let palavraAleatoria;
  const [letraclicada, setLetterClicked] = React.useState("");
  return (
    <div className="App">
      <Jogo
        word={word}
        setWord={setWord}
        arrayWord={arrayWord}
        setArrayWord={setArrayWord}
        rightWord={rightWord}
        selectedLetters={selectedLetters}
        palavraAleatoria={palavraAleatoria}
        attempt={attempt}
        setLetterClicked={setLetterClicked}
        letraclicada={letraclicada}
      />
      <div className="downside">
        <Letras
          alfabeto={alfabeto}
          selectedLetters={selectedLetters}
          setSelectedLetters={setSelectedLetters}
          setLetterClicked={setLetterClicked}
          letraclicada={letraclicada}
        />
        <Chute 
          attempt={attempt}
          setAttempt={setAttempt}
          palavraAleatoria={palavraAleatoria}
        />
      </div>
    </div>
  );
}



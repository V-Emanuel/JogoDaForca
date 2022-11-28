import React, { useState } from "react";
import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"
import palavras from "../palavras"
let img = forca0;
let cond = 0;
let letrinha = "";

export default function Jogo({word, setWord, arrayWord, setArrayWord, selectedLetters, rightWord}) {

  function chooseWord() {

    let palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setWord(palavraAleatoria);
    setArrayWord(palavraAleatoria.split(''));

    while(rightWord.length) {
      rightWord.pop();
   }
    for(let i = 0; i < palavraAleatoria.length; i++){
      rightWord[i] = '_ ';
    }
  }

  for(let i = 0; i < arrayWord.length; i++){
    for(let j = 0; j < selectedLetters.length; j++){
      if(arrayWord[i] == selectedLetters[j]){
         cond = 1;
         letrinha = arrayWord[i];
      }
    }
    if(cond == 1){
      rightWord[i] = arrayWord[i]; 
    }else{
      rightWord[i] = "_ "
    }
    cond = 0;
  }

  return (
    <div className='upside'>
      <div className='images'>
        <img className='forca' src={img}></img>
      </div>
      <div className="direita">
        <button className='choose' onClick={chooseWord}>Escolher Palavra</button>
        <p className="randomWord">{word}</p>
        <p className="randomWord">{rightWord}</p>
      </div>
    </div>
  );
}

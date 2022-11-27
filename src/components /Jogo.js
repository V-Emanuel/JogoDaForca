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

export default function Jogo(){

  let [word, setWord] = useState("");

  function chooseWord(){
    setWord(palavras[Math.floor(Math.random() * palavras.length)]);
  }

    return (
        <div className='upside'>
        <div className='images'>
          <img className='forca forca0' src={img}></img>
        </div>
        <div className="direita">
        <button className='choose' onClick={chooseWord}>Escolher Palavra</button>
        <p className="randomWord">{word}</p>
        </div>
        

  </div>
    );
}

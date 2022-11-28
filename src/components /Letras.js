import React, { useState } from "react";

export default function Letras({alfabeto, selectedLetters, setSelectedLetters, setLetterClicked, inicio}) {
    function letterClicked(letra) {
        if(!selectedLetters.includes(letra)){
            setSelectedLetters([...selectedLetters, letra]);
            setLetterClicked(letra);
        }   
    }
    function aposClick(letra){
        letterClicked(letra);
    }
    function aparece(){
        console.log(selectedLetters);
    }
    function Letter(props) {
        return (
            <li data-test="letter" onClick={() => aposClick(props.letter)}
            className={`${selectedLetters.includes(props.letter) || selectedLetters.includes(props.letter) || inicio? "selected" : "nSelected"} `}>
                {props.letter}
            </li>
           
        );
    }
    return (
        <ul className="alphabet">
            {alfabeto.map((item) => <Letter letter={item} />)}
        </ul>
    );
}
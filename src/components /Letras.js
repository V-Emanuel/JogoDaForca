import React, { useState } from "react";

export default function Letras({alfabeto, selectedLetters, setSelectedLetters}) {
    function letterClicked(letra) {
        if(!selectedLetters.includes(letra)){
            setSelectedLetters([...selectedLetters, letra]);
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
            <li onClick={() => aposClick(props.letter)}
            className={`${selectedLetters.includes(props.letter) ? "selected" : "nSelected"} `}>
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
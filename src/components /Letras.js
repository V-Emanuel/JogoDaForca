import React from "react";
export default function Letras() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
        "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const [selectedLetters, setSelectedLetters] = React.useState([])
    function letterClicked(letra) {
        setSelectedLetters([...selectedLetters, letra]);
    }
    function Letter(props) {
        return (
            <li onClick={() => letterClicked(props.letter)} 
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
import React from "react";
export default function Chute({ attempt, setAttempt,palavraAleatoria}) {
    function tentativa() {          
           /*setAttempt("");*/   
           console.log(attempt)
           console.log(palavraAleatoria)
    }

    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input type="text" value={attempt} onChange={ev => setAttempt(ev.target.value)} />
            <button className="chutar" onClick={tentativa}>Chutar</button>
            <p>{attempt}</p>
        </div>
    );
}
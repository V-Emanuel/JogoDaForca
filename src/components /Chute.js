import React from "react";
export default function Chute({attempt, setAttempt}){
    function tentativa(){
        setAttempt("");
    }
    return (
        <div className="chute">
                <p>Já sei a palavra!</p>
                <input type="text" value={attempt} onChange={ev => setAttempt(ev.target.value)}/>
                <button className="chutar" onClick={tentativa}>Chutar</button>
                <p>{attempt}</p>
            </div>
    );
}
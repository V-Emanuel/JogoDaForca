import React from "react";
export default function Chute(){
    const [tent, setTent] = React.useState("");
    function tentativa(){
        console.log(tent);
        setTent("");
    }
    return (
        <div className="chute">
                <p>Já sei a palavra!</p>
                <input type="text" value={tent} onChange={ev => setTent(ev.target.value)}/>
                <button className="chutar" onClick={tentativa}>Chutar</button>
                <p>{tent}</p>
            </div>
    );
}
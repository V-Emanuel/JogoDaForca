
import Jogo from "./Jogo.js"
import Chute from "./Chute";
import Letras from "./Letras";

export default function App() {
  return (
    <div className="App">
     <Jogo/>
     <div className="downside">
            <Letras/>
            <Chute/>
        </div>
    </div>
  );
}



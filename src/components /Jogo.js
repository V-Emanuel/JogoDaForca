import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"
import palavras from "../palavras"
let img = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
let erro = 0;
let cond = 0;
let init = 0;
let cond_img = 0;
export default function Jogo({word, setWord, arrayWord, setArrayWord, selectedLetters, rightWord, palavraAleatoria, attempt, setLetterClicked, letraclicada}) {

  function chooseWord() {
    erro = 0;
    init = 1;
    palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setWord(palavraAleatoria);
    setArrayWord(palavraAleatoria.split(''));
    console.log(palavraAleatoria);

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
      }
    }
    if(cond == 1){
      rightWord[i] = arrayWord[i]; 
    }else{
      rightWord[i] = "_ "
    }
    if(init ==1){
      while(selectedLetters.length) {
        selectedLetters.pop();
     }
    }
    
    init = 0;
    cond = 0;
  }

  console.log(letraclicada)
  for (let k = 0; k < arrayWord.length; k++) {
    if(letraclicada == arrayWord[k]){
      cond_img = 1;
    }
  }
  if(cond_img == 0){
    erro = erro + 0.5;
  }
  cond_img  = 0;
  return (
    <div className='upside'>
      <div className='images'>
        <img className='forca' src={img[erro]}></img>
      </div>
      <div className="direita">
        <button className='choose' onClick={chooseWord}>Escolher Palavra</button>
        <p className="randomWord">{word}</p>
        <p className="randomWord">{rightWord}</p>
        <p className="randomWord">{attempt}</p>
      </div>
    </div>
  );
}

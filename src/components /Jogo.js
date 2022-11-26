import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"

export default function Jogo(){
    return (
        <div className='upside'>
        <div className='images'>
          <img className='forca forca0' src={forca0}></img>
          <img className='forca forca1' src={forca1}></img>
          <img className='forca forca2' src={forca2}></img>
          <img className='forca forca3' src={forca3}></img>
          <img className='forca forca4' src={forca4}></img>
          <img className='forca forca5' src={forca5}></img>
          <img className='forca forca6' src={forca6}></img>
        </div>
        <button className='choose'>Escolher Palavra</button>
  </div>
    );
}

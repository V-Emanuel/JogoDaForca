export default function Letras(){
    const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    function Letter(props){
        return (
            <li>{props.letter}</li>
        );
    }
    return (
        <ul className="alphabet">
                 {abc.map((item) => <Letter letter={item}/>  )}
            </ul>
    );
}
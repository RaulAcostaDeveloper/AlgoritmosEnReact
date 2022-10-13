import { useState, useEffect } from "react";

const AcomodaNumeroEnArray = ()=> {
    const [numero, setNumero] = useState('');
    const [cadena, setCadena] = useState([]);
    const handleNumeroArray = () => {
        if (numero) {
            let arrayAcomodado = cadena.concat(numero);
            arrayAcomodado = arrayAcomodado.sort((a, b) => a - b);
            setCadena(arrayAcomodado);
        }
        setNumero('');
    }
    return (
        <>
        <div className="block100">
            <input type={'number'} placeholder='Escribe aquí' value={numero} onChange={(e)=>setNumero(e.target.value)}/>
        </div>
        <div className="block100">
            <button onClick={()=>{handleNumeroArray()}}>Añadir al arreglo</button>
        </div>
        {(cadena.length>0)&&
        <div className="block100">
            <p>La cadena es <b>[{cadena.map((num) => <>{num}, </>)}]</b></p>
        </div>
        }
        </>
    )
}
export default AcomodaNumeroEnArray;
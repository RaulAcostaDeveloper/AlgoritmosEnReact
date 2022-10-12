import { useState, useEffect } from "react";

const MultiplicaUnaCadena = ()=> {
    const [cadena, setCadena] = useState('');
    const [numero, setNumero] = useState('');
    const [cadenaFinal, setCadenaFinal] = useState('');
    useEffect(()=>{
        if (cadena && numero) {
            let str = "";
            for (let i = 0; i < numero; i++) {
              str += cadena;
            }
            setCadenaFinal(str)
        }
    },[cadena, numero])
    return (
        <>
        <div className="block100">
            <span>Cadena</span>
            <input placeholder='Escribe aquí' value={cadena} onChange={(e)=>setCadena(e.target.value)}/>
        </div>
        <div className="block100">
            <span>Cantidad</span>
            <input type={'number'} placeholder='Escribe aquí' value={numero} onChange={(e)=>setNumero(e.target.value)}/>
        </div>
        {(cadena && numero)&&
            <div  className="block100">
                <p>La cadena resultante es <b>{cadenaFinal}</b></p>
            </div>
        }
        </>
    )
}
export default MultiplicaUnaCadena;
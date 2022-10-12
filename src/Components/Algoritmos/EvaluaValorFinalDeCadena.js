import { useState, useEffect } from "react";

const EvaluaValorFinalDeCadena = ()=>{
    const [cadena, setCadena] = useState('');
    const [valorFinal, setValorFinal] = useState('');
    const [esValorFinal, setEsValorFinal] = useState(false);
    useEffect(()=>{
        if (cadena && valorFinal) {
            setEsValorFinal(cadena.slice(cadena.length - valorFinal.length) === valorFinal)
        }
    },[cadena, valorFinal])

    return (
        <>
        <div className="block100">
            <span>Cadena</span>
            <input placeholder='Escribe aquí' value={cadena} onChange={(e)=>setCadena(e.target.value)}/>
        </div>
        <div className="block100">
            <span>Valor final</span>
            <input placeholder='Escribe aquí' value={valorFinal} onChange={(e)=>setValorFinal(e.target.value)}/>
        </div>
        {(cadena && valorFinal)&&
            <div  className="block100">
                <p> {valorFinal} <b>{esValorFinal? 'si': 'no'}</b>  es el valor final de la cadena</p>
            </div>
        }
        </>
    )
}
export default EvaluaValorFinalDeCadena;
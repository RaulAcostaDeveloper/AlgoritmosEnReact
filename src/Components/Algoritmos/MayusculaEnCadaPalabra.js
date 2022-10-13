import { useState, useEffect } from "react";

const MayusculaEnCadaPalabra = ()=> {
    const [cadena, setCadena] = useState('');
    const [cadenaFinal, setCadenaFinal] = useState('');
    useEffect(()=>{
        if (cadena) {
            let str = cadena.toLowerCase()
            .split(" ")
            .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
            .join(" ");

            setCadenaFinal(str)
        }
    },[cadena])
    return (
        <>
        <div className="block100">
            <input placeholder='Escribe aquí' value={cadena} onChange={(e)=>setCadena(e.target.value)}/>
        </div>
        {cadenaFinal&&
            <div  className="block100">
                <p>La cadena resultante es <b>{cadenaFinal}</b></p>
            </div>
        }
        </>
    )
}
export default MayusculaEnCadaPalabra;
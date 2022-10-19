import { useState, useEffect } from "react";

const LetraFaltante = ()=>{
    const [cadena, setCadena] = useState('');
    const [faltante, setFaltante] = useState('');
    useEffect(()=>{
        if (cadena.length>0) {
            let currCharCode = cadena.charCodeAt(0);
            let missing = '';
          
            cadena.split("").forEach(letra => {
                if (letra.charCodeAt(0) === currCharCode) {
                  currCharCode++;
                } else {
                  missing = String.fromCharCode(currCharCode);
                }
            });
            setFaltante(missing);
        }
    },[cadena])
    return (
        <>
        <div className="block100">
            <input placeholder="Escribe aquí" value={cadena} onChange={(e)=>setCadena(e.target.value)}/>
        </div>
        {(faltante.length>0)&&
        <div className="block100">
            <p>El caracter faltante es <b>{faltante}</b></p>
        </div>
        }
        </>
    )
}
export default LetraFaltante;
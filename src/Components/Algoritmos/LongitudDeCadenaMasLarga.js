import { useState, useEffect } from "react";

const LongitudDeCadenaMasLarga = ()=>{
    const [cadena, setCadena] = useState('');
    const [longitudMaxima, setLongitudMaxima] = useState('');
    const [cadenaMaxma, setCadenaMaxima] = useState('');
    useEffect(()=>{
        if (cadena) {
            let words = cadena.split(' ');
            let maxLength = 0;
            let maxWord = '';
            for (let i = 0; i < words.length; i++) {
                if (words[i].length > maxLength) {
                    maxLength = words[i].length;
                    setCadenaMaxima(words[i]);
                }
            }
            setLongitudMaxima(maxLength);
        }
    },[cadena])
    return (
        <>
        <div className="block100">
            <input placeholder='Escribe aquí' value={cadena} onChange={(e)=>setCadena(e.target.value)}/>
        </div>
        {cadena&&
            <div  className="block100">
                <p>La longitud de <b>{cadenaMaxma}</b> es <b>{longitudMaxima}</b></p>
            </div>
        }
        </>
    )
}
export default LongitudDeCadenaMasLarga;
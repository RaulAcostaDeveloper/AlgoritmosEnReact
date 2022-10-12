import { useState, useEffect } from "react";

const DeterminaSiEsPalindromo = ()=>{
    const [cadena, setCadena] = useState('');
    const [esPalindromo, setEsPalindromo] = useState(false);
    useEffect(()=>{
        if (cadena) {
            let re = /[\W_]/g;
            let lowRegStr = cadena.toLowerCase().replace(re, '');
            let reverseStr = lowRegStr.split('').reverse().join(''); 
            setEsPalindromo(reverseStr === lowRegStr);
        }
    },[cadena])
    return (
        <>
        <div className="block100">
            <input placeholder='Escribe aquí' value={cadena} onChange={(e)=>setCadena(e.target.value)}/>
        </div>
        {cadena&&
            <div  className="block100">
                {esPalindromo?
                        <p>{cadena} Es <b>palindromo</b></p>
                :
                        <p>{cadena} No es <b>palindromo</b></p>
                }
            </div>
        }
        </>
    )
}
export default DeterminaSiEsPalindromo;
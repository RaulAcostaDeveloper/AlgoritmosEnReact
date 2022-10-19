import { useState, useEffect } from "react";

const DeterminaSiEsPalindromo = ()=>{
    const [cadena, setCadena] = useState('');
    const [esPalindromo, setEsPalindromo] = useState(false);
    useEffect(()=>{
        if (cadena) {
            setEsPalindromo(cadena.toLowerCase() === cadena.toLowerCase().split('').reverse().join(''));
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
                        <p>{cadena} <b>Es</b> palindromo</p>
                :
                        <p>{cadena} <b>No es</b> palindromo</p>
                }
            </div>
        }
        </>
    )
}
export default DeterminaSiEsPalindromo;
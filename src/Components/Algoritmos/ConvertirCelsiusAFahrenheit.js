import { useState, useEffect } from "react";

const ConvertirCelsiusAFahrenheit = () => {
    const [numero, setNumero] = useState('');
    const [numeroF, setNumeroF] = useState('');
    useEffect(()=>{
        if (numero) {
            setNumeroF((numero * (9 / 5)) + 32);
        }
    },[numero]);
    return(
        <>
        <div className="block100">
            <input type={'number'} placeholder='Escribe aquí' value={numero} onChange={(e)=>setNumero(e.target.value)}/>
        </div>
        {numero&&
            <div  className="block100">
                <p>{numero} a Fahrenheit es <b>{numeroF}</b></p>
            </div>
        }
        </>
    )
}
export default ConvertirCelsiusAFahrenheit;
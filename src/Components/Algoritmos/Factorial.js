import { useState, useEffect } from "react";

const Factorial = ()=>{
    const [cadena, setCadena] = useState('');
    const [factorial, setFactorial] = useState('');
    useEffect(()=>{
        if (cadena) {
            let sol = 1;
            for (let i = 2; i <= cadena; i++) {
              sol *= i;
            }
            setFactorial(sol);
        }
    },[cadena])
    return (
        <>
        <div className="block100">
            <input type={'number'} placeholder='Escribe aquí' value={cadena} onChange={(e)=>setCadena(e.target.value)}/>
        </div>
        {cadena&&
            <div  className="block100">
                <p>El factorial es <b>{factorial}</b></p>
            </div>
        }
        </>
    )
}
export default Factorial;
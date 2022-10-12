import { useState, useEffect } from "react";

const RevertirUnString = ()=> {
    const [cadena, setCadena] = useState('');
    const [cadenaRev, setCadenaRev] = useState('');
    useEffect(()=>{
        if (cadena) {
            let res="";
            for (let i = cadena.length - 1; i >= 0; i--) {
                res += cadena[i];
            }
            setCadenaRev(res);
        }
    },[cadena])
    return (
        <>
        <div className="block100">
            <input placeholder='Escribe aquí' value={cadena} onChange={(e)=>setCadena(e.target.value)}/>
        </div>
        {cadena&&
            <div  className="block100">
                <p>La cadena revertida es <b>{cadenaRev}</b></p>
            </div>
        }
        </>
    )
}
export default RevertirUnString;
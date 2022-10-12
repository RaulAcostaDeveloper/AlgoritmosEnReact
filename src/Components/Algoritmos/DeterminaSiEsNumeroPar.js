import { useEffect, useState } from "react";

const DeterminaSiEsNumeroPar = () => {
    const [numero, setNumero] = useState();
    const [esPar, setEsPar] = useState(false);
    useEffect(()=>{
        setEsPar((numero % 2) === 0);
    },[numero])
    return (
        <>
        <div className="block100">
            <input type={'number'} placeholder='Ingresa un número' value={numero} onChange={(e)=>setNumero(e.target.value)}/>
        </div>
        {numero&&
            <div className="block100">
                {esPar?
                        <p>{numero} Es <b>par</b></p>
                :
                        <p>{numero} Es <b>inpar</b></p>
                }
            </div>
        }
        </>
    )
}
export default DeterminaSiEsNumeroPar;
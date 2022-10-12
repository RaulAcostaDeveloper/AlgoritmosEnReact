import { useEffect, useState } from "react";

const DeterminaSiEsNumeroPar = () => {
    const [numero, setNumero] = useState();
    const [esPar, setEsPar] = useState(false);
    useEffect(()=>{
        setEsPar((numero % 2) === 0);
    },[numero])
    return (
        <div>
            <input type={'number'} placeholder='Ingresa un número' value={numero} onChange={(e)=>setNumero(e.target.value)}/>
            {numero&&
                <>
                    {esPar?
                        <div className="respuesta">
                            <p>{numero} Es <b>par</b></p>
                        </div>
                    :
                        <div className="respuesta">
                            <p>{numero} Es <b>inpar</b></p>
                        </div>
                    }
                </>
            }
        </div>
    )
}
export default DeterminaSiEsNumeroPar;
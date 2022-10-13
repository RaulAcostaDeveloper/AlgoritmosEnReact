import { useState, useEffect } from "react";

const CadenaContieneLetras = () => {
    const [cadena, setCadena] = useState('');
    const [caracteres, setCaracteres] = useState('');
    const [contiene, setContiene] = useState(false);
    useEffect(()=>{
        if ( cadena && caracteres ) {
            let normCadena = cadena.toLowerCase();
            let normCaracteres = caracteres.toLowerCase();
            for (let i = 0; i < normCaracteres.length; i++) {
                if (normCadena.indexOf(normCaracteres[i]) < 0){
                    setContiene(false);
                    return undefined;
                }
            }
            setContiene(true);
        }
    },[cadena,caracteres])
    return (
        <>
        <div className="block100">
            <p>Cadena</p>
        </div>
        <div className="block100">
            <input placeholder='Escribe aquí' value={cadena} onChange={(e)=>setCadena(e.target.value)}/>
        </div>
        <div className="block100">
            <p>Letras</p>
        </div>
        <div className="block100">
            <input placeholder='Escribe aquí' value={caracteres} onChange={(e)=>setCaracteres(e.target.value)}/>
        </div>
        {(cadena&&caracteres)&&
        <div className="block100">
            <p>La cadena {contiene? <b>si</b>:<b>no</b>} todos los caracteres</p>
        </div>
        }
        </>
    )
}
export default CadenaContieneLetras;
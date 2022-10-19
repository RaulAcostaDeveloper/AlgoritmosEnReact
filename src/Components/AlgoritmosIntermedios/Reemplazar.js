import { useState, useEffect } from "react";

const Reemplazar  = ()=>{
    const [frase, setFrase] = useState('A quick brown fox jumped over the lazy dog');
    const [value, setValue] = useState('');
    const [valueR, setValueR] = useState('');
    const [fraseR, setFraseR] = useState('');
    useEffect(()=>{
        if (value.length>0&&valueR.length>0) {
            try {                
                const strArr = frase.split(" ");
                const [wordToReplace] = strArr.filter(item => item === value);
                const replacement = wordToReplace[0] === wordToReplace[0].toUpperCase()
                  ? valueR[0].toUpperCase() + valueR.slice(1)
                  : valueR[0].toLowerCase() + valueR.slice(1);
                setFraseR(strArr.map(item => (item === value ? replacement : item)).join(" "));
            } catch (error) {
                setFraseR('');
            }
        }
    },[value, valueR])
    return (
        <>
        <div className="block100">
            <p>{frase}</p>
        </div>
        <div className="block100">
            <input placeholder="Escribe aquí" value={value} onChange={(e)=>setValue(e.target.value)}/>
        </div>
        <div className="block100">
            <input placeholder="Escribe aquí" value={valueR} onChange={(e)=>setValueR(e.target.value)}/>
        </div>
        <div className="block100">
            <p>Reemplaza <b>{value}</b> por <b>{valueR}</b></p>
        </div>
        {(fraseR.length>0)&&
        <>
            <div className="block100">
                <p>La frase resultante es <b>{fraseR}</b></p>
            </div>
        </>
        }
        </>
    )
}
export default Reemplazar;
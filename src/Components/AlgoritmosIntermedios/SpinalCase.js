import { useState, useEffect } from "react";

const SpinalCase = ()=>{
    const [value, setvalue] = useState('');
    const [res, setRes] = useState('');
    useEffect(()=>{
        if (value) {
            setRes(value.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase());
        }
    },[value])
    return (
        <>
        <div className="block100">
            <input placeholder="Escribe aquí" value={value} onChange={(e)=>setvalue(e.target.value)}/>
        </div>
        {value&&        
        <div className="block100">
            <p>El resultado es <b>{res}</b></p>
        </div>
        }
        </>
    )
}
export default SpinalCase;
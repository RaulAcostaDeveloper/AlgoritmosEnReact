import { useEffect, useState } from "react";

const MinimoComunMultiplo = ()=>{
    const [numero, setNumero] = useState('');
    const [segundoNumero, setSegundoNumero] = useState('');
    const [mcm, setMcm] = useState('');
    useEffect(()=>{
        if (numero>0&&segundoNumero>0 && numero<20&&segundoNumero<20) {
            var max = Math.max(numero, segundoNumero);
            var min = Math.min(numero, segundoNumero);
            var multiple = max;
          
            for(var i = max; i >= min; i--){
              if(multiple % i !== 0){
                multiple += max; 
                i = max;
              } 
            }
            setMcm(multiple);
        } else{
            setMcm(0);
        }
    },[numero,segundoNumero]);
    return (
        <>
        <div className="block100">
            <input placeholder="Escribe aquí el primer número" value={numero} onChange={(e)=>setNumero(e.target.value)}/>
        </div>
        <div className="block100">
            <input placeholder="Escribe aquí el segundo número"  value={segundoNumero} onChange={(e)=>setSegundoNumero(e.target.value)}/>
        </div>
        {mcm>0&&
        <div className="block100">
            <p>El mínimo común múltiplo es <b>{mcm}</b></p>
        </div>
        }
        {(numero>20||segundoNumero>20)&&
        <div className="block100">
            <p>Números tán altos pueden causar loops infinitos</p>
        </div>
        }
        </>
    )
}
export default MinimoComunMultiplo;
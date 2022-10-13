import { useState } from "react";

const SumaNumerosEnUnRango = ()=> {
    const [numero, setNumero] = useState('');
    const [arreglo, setArreglo] = useState([]);
    const [deshabilitaInput, setDeshabilitaInput] = useState(false);
    const [resultado, setResultado] = useState('');
    const handleNumeroArray = ()=>{
        if (numero) {
            setArreglo(arreglo.concat(numero));
        }
        if (arreglo.length===1) {
            setDeshabilitaInput(true);
        }
        setNumero('');
    }
    const calcular = ()=>{
        let max = Math.max(arreglo[0], arreglo[1]);
        let min = Math.min(arreglo[0], arreglo[1]);
        let sumBetween = 0;
        for (let i = min; i <= max; i++) {
          sumBetween += i;
        }
        setResultado(sumBetween);
    }
    return (
        <>
        <div className="block100">
            <input disabled={deshabilitaInput} type='number' placeholder='Escribe aquí' value={numero} onChange={(e)=>setNumero(e.target.value)}/>
        </div>
        <div className="block100">
            <button onClick={()=>{handleNumeroArray()}}>Añadir al arreglo</button>
        </div>
        {(arreglo.length>0)&&
        <div className="block100">
            <p>El arreglo es [{arreglo.map((el)=><span>{el}, </span>)}]</p>
        </div>
        }
        <div className="block100">
            <button onClick={()=>{setArreglo([]); setDeshabilitaInput(false); setResultado('');}}>Resetear</button>
        </div>
        <div className="block100">
            <button onClick={()=>{calcular()}}>Calcular</button>
        </div>
        {resultado&&
        <div className="block100">
            <p>La suma de los números que se encuentra entre el primer y segundo número es <b>{resultado}</b></p>
        </div>
        }
        </>
    )
}
export default SumaNumerosEnUnRango;
import { useState, useEffect } from "react";

const RemueveElementosDelArreglo  = ()=>{
    const [numero, setNumero] = useState('');
    const [otroNumero, setOtroNumero] = useState('');
    const [primerArreglo, setPrimerArreglo] = useState([]);
    const [segundoArreglo, setSegundoArreglo] = useState([]);
    const [arregloResultante, setArregloResultante] = useState([]);
    const handlePrimerArray = ()=>{
        if (numero) {
            setPrimerArreglo(primerArreglo.concat(numero));
        }
        setNumero('');
    }
    const handleSegundoArray = ()=>{
        if (otroNumero) {
            setSegundoArreglo(segundoArreglo.concat(otroNumero));
        }
        setOtroNumero('');
    }
    useEffect(()=>{
        if (primerArreglo.length>0 && segundoArreglo.length>0) {
            setArregloResultante(primerArreglo.filter(elem => !segundoArreglo.includes(elem)))
        }
    },[primerArreglo, segundoArreglo])
    return (
        <>
        <div className="block100">
            <input placeholder='Escribe aquí' value={numero} onChange={(e)=>setNumero(e.target.value)}/>
        </div>
        <div className="block100">
            <button onClick={()=>handlePrimerArray()}>Añadir al primer arreglo</button>
        </div>
        <div className="block100">
            <input placeholder='Escribe aquí' value={otroNumero} onChange={(e)=>setOtroNumero(e.target.value)}/>
        </div>
        <div className="block100">
            <button onClick={()=>handleSegundoArray()}>Añadir elementos a eliminar</button>
        </div>
        {(primerArreglo.length>0)&&
        <div className="block100">
            <p>El arreglo es [{primerArreglo.map((el)=><span>{el}, </span>)}]</p>
        </div>
        }
        {(segundoArreglo.length>0)&&
        <div className="block100">
            <p>Los elementos a eliminar son  {segundoArreglo.map((el)=><span>{el}, </span>)}</p>
        </div>
        }
        {(primerArreglo.length>0 && segundoArreglo.length>0)&&
        <div className="block100">
            <p>El resultado es <b>[{arregloResultante.map((el)=><span>{el}, </span>)}]</b></p>
        </div>
        }
        <div className="block100">
            <button onClick={()=>{setPrimerArreglo([]); setSegundoArreglo([]); setArregloResultante([]);}}>Limpiar</button>
        </div>
        </>
    )
}
export default RemueveElementosDelArreglo;
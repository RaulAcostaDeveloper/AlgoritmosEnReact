import { useState, useEffect } from "react";

const DiferenciaSimetricaDeDosArrays = ()=>{
    const [numero, setNumero] = useState('');
    const [otroNumero, setOtroNumero] = useState('');

    const [primerArreglo, setPrimerArreglo] = useState([]);
    const [segundoArreglo, setSegundoArreglo] = useState([]);
    const [diferencia, setDiferencia] = useState([]);
    
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
        if (primerArreglo.length>0&&segundoArreglo.length>0) {
            let res = primerArreglo.concat(segundoArreglo).filter( 
                item => !primerArreglo.includes(item) || !segundoArreglo.includes(item)
                );
                console.log(res);
            setDiferencia(res);
        }
    },[primerArreglo, segundoArreglo])
    return (
        <>
        <div className="block100">
            <input placeholder='Escribe aquí' value={numero} onChange={(e)=>setNumero(e.target.value)}/>
        </div>
        <div className="block100">
            <button onClick={()=>{handlePrimerArray()}}>Añadir al primer arreglo</button>
        </div>
        {(primerArreglo.length>0)&&
        <div className="block100">
            <p>El primer arreglo es [{primerArreglo.map((el)=><span>{el}, </span>)}]</p>
        </div>
        }
        <div className="block100">
            <input placeholder='Escribe aquí' value={otroNumero} onChange={(e)=>setOtroNumero(e.target.value)}/>
        </div>
        <div className="block100">
            <button onClick={()=>{handleSegundoArray()}}>Añadir al segundo arreglo</button>
        </div>
        {(segundoArreglo.length>0)&&
        <div className="block100">
            <p>El segundo arreglo es [{segundoArreglo.map((el)=><span>{el}, </span>)}]</p>
        </div>
        }
        {(diferencia.length>0)&&
        <div className="block100">
            <p>La diferencia simétrica entre los arreglos es <b>[{diferencia.map((el)=><span>{el}, </span>)}]</b></p>
        </div>
        }
        <div className="block100">
            <button onClick={()=>{setPrimerArreglo([]); setSegundoArreglo([]);setDiferencia([]);}}>Limpiar</button>
        </div>
        </>
    )
}
export default DiferenciaSimetricaDeDosArrays;
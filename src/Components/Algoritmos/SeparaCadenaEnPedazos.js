import { useState, useEffect } from "react";

const SeparaCadenaEnPedazos = ()=>{
    const [valor, setValor] = useState('');
    const [cadena, setCadena] = useState([]);
    const [cantidad, setCantidad] = useState('');
    const [cadenaFinal, setCadenaFinal] = useState([])
    useEffect(()=>{
        if (cadena&&cantidad) {
            let temp = [];
            let result = [];
          
            for (let a = 0; a < cadena.length; a++) {
              if (a % cantidad !== cantidad - 1) temp.push(cadena[a]);
              else {
                temp.push(cadena[a]);
                result.push(temp);
                temp = [];
              }
            }
          
            if (temp.length !== 0) result.push(temp);
            setCadenaFinal(result)
        }
    },[cadena,cantidad]);
    return (
        <>
        <div className="block100">
            <p>Cadena</p>
        </div>
        <div className="block100">
            <input placeholder='Escribe aquí' value={valor} onChange={(e)=> { setCadena(cadena.concat(e.target.value)); setValor(''); }}/>
        </div>
        {cadena&&
            <div  className="block100">
                <p>La cadena es [{cadena.map((el)=> <span>{el}, </span>)}]</p>
            </div>
        }
        <div className="block100">
            <p>Cantidad que debe tener cada cadena</p>
        </div>
        <div className="block100">
            <input type={'number'} placeholder='Escribe aquí' value={cantidad} onChange={(e)=>setCantidad(e.target.value)}/>
        </div>
        {(cadenaFinal.length>0)&&
            <div  className="block100">
                <p>La cadena separada es [{cadenaFinal.map((el)=> <span>{el}, </span>)}]</p>
            </div>
        }
        <div className="block100">
            <button onClick={()=>{setCadena([])}}>Limpiar cadena</button>
        </div>
        </>
    )
}
export default SeparaCadenaEnPedazos;
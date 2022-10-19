import { useState, useEffect } from "react";

const ArregloConValoresUnicos = ()=>{
    const [value, setValue] = useState('');
    const [cadena, setCadena] = useState([]);
    const [cadenaRes, setCadenaRes] = useState([]);
    const handleNuevoArreglo = ()=>{
        if (value.length>0) {
            let tempArray = value.split('');
            let tempCadena = cadena;
            tempCadena.push(tempArray);
            setCadena(tempCadena);
            setValue('');
            console.log(tempCadena);
        }
    }
    const generaResultado = ()=>{
        if (cadena.length>0) {            
            let valoresUnicos = [];
            for (let i = 0; i < cadena.length; i++) {
              for (let j = 0; j < cadena[i].length; j++) {
                if (!valoresUnicos.includes(cadena[i][j])) {
                  valoresUnicos.push(cadena[i][j]);
                }
              }
            }
            setCadenaRes(valoresUnicos);
        }
    }
    return (
        <>
        <div className="block100">
            <p>Genera arreglos, y retorna otro arreglo solo con valores únicos.</p>
        </div>
        <div className="block100">
            <input placeholder="Escribe aquí" value={value} onChange={(e)=>setValue(e.target.value)}/>
        </div>
        {(value.length>0)&&    
        <div className="block100">
            <button onClick={()=>handleNuevoArreglo()}>Nuevo arreglo</button>
        </div>
        }
        {(cadena.length>0)&&     
        <>        
        <div className="block100">
            <p>Los arreglos son [ {cadena.map((cadena)=> <>[{cadena.map((el)=> <>{el}, </>)}], </> )} ]</p>
        </div>
        <div className="block100">
            <button onClick={()=>generaResultado()}>Genera</button>
        </div>
            {(cadenaRes.length>0)&&
            
            <div className="block100">
                <p>El arreglo resultante es <b>[{cadenaRes.map((el)=><>{el}, </>)}]</b></p>
            </div>
            }
        <div className="block100">
            <button onClick={()=> {setCadena([]); setCadenaRes([]);}}>Reset</button>
        </div>
        </>
        }
        </>
    )
}
export default ArregloConValoresUnicos;
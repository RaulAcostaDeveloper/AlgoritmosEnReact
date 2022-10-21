import { useEffect, useState } from "react";

const DevuelveElementosAPartirDeCiertoPunto = ()=>{
    const [value, setValue] = useState('');
    const [arr, setArr] = useState([]);
    const [res, setRes] = useState([]);
    const condicional = function(n) { return n >= 5; }
    useEffect(()=>{
        if (arr.length>0) {
            let sliceIndex = arr.findIndex(condicional);
            setRes(arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length));
        }
    },[arr])
    return (
        <>
        <div className="block100">
            <p>La condicional es que el <b>elemento sea mayor a 5</b></p>
        </div>
        <div className="block100">
            <input placeholder="Escribe aquí" value={value} onChange={(e)=>{setArr(arr.concat(e.target.value)); setValue('');}}/>
        </div>
        {(arr.length>0)&&
        <>
        <div className="block100">
            <p>El arreglo es [{arr.map((el)=> <>{el}, </>)}]</p>
        </div>
        <div className="block100">
            <button onClick={()=>{setArr([]); setRes([]);}}>Reset</button>
        </div>
        </>
        }
        {(res.length>0)&&
        <div className="block100">
            <p>El resultante es <b>[{res.map((el)=><>{el}, </>)}]</b></p>
        </div>
        }
        </>
    )
}
export default DevuelveElementosAPartirDeCiertoPunto;
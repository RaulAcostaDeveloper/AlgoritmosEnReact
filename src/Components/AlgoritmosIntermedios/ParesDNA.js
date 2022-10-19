import { useState, useEffect } from "react";

const ParesDNA = ()=>{
    const [value, setValue] = useState('');
    const [cadena, setCadena] = useState('');
    const [deshabilitaInput, setDeshabilitaInput] = useState(false);
    const [paresDNA, setParesDNA] = useState([]);
    const handleCadenaADN = (value)=>{
        let temp = value.toUpperCase();
        if (cadena.length<5) {            
            switch (temp) {
                case 'A':
                    setCadena(cadena.concat(temp));
                    setValue('');
                    break;
                case 'T':
                    setCadena(cadena.concat(temp));
                    setValue('');
                    break;
                case 'G':
                    setCadena(cadena.concat(temp));
                    setValue('');
                    break;
                case 'C':
                    setCadena(cadena.concat(temp));
                    setValue('');
                    break;
                default:
                    setValue('');
                    break;
            }
        } else{
            setDeshabilitaInput(true);
        }
    }
    useEffect(()=>{
        if (cadena.length>0) {
            let res = cadena.split("").map((el) => {
                if (el === "A") {
                  return ["A", "T"];
                } else  if (el === "T") {
                  return ["T", "A"];
                } else if (el === "C") {
                  return ["C", "G"];
                } else {
                  return ["G", "C"];
                }
              });
              setParesDNA(res);
        }
    },[cadena])
    return (
        <>
        <div className="block100">
            <p>Ingresa una cadena de ADN y retorna los pares DNA</p>
        </div>
        <div className="block100">
            <p>Las cadenas de ADN solo tienen  “A”, “T”, “G” y “C”</p>
        </div>
        <div className="block100">
            <input placeholder="Escribe aquí" disabled={deshabilitaInput} value={value} onChange={(e)=> handleCadenaADN(e.target.value)}/>
        </div>
        {(cadena.length>0)&&      
        <>
        <div className="block100">
            <p>La cadena de ADN es <b>{cadena}</b></p>
        </div>
        <div className="block100">
            <p>Los pares DNA son {paresDNA.map((el)=> <b>{el}, </b>)} </p>
        </div>
        </>  
        }
        <div className="block100">
            <button onClick={()=>{setCadena(''); setParesDNA([]); setDeshabilitaInput(false);}}>Reset</button>
        </div>
        </>
    )
}
export default ParesDNA;
import { useEffect, useState } from "react";

const SumaImparesFibonacci = ()=>{
    const [numero, setNumero] = useState('');
    const [totalSuma, setTotalSuma] = useState(0);
    useEffect(()=>{
        if (numero>0) {
            let prevNumber = 0;
            let currNumber = 1;
            let result = 0;
            while (currNumber <= numero) {
              if (currNumber % 2 !== 0) {
                result += currNumber;
              }
              currNumber += prevNumber;
              prevNumber = currNumber - prevNumber;
            }
            setTotalSuma(result);
        }
    },[numero]);
    return (
        <>
        <div className="block100">
            <input placeholder="Escribe aquí" type={'number'} value={numero} onChange={(e)=>setNumero(e.target.value)}/>
        </div>
        {(totalSuma>0)&&        
        <div className="block100">
            <p>El resultado es <b>{totalSuma}</b></p>
        </div>
        }
        </>
    )
}
export default SumaImparesFibonacci;
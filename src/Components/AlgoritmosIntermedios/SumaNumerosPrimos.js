import { useEffect, useState } from "react";

const SumaNumerosPrimos = ()=>{
    const [numero, setNumero] = useState('');
    const [totalSuma, setTotalSuma] = useState(0);
    useEffect(()=>{
        if (numero>0) {
            let primos = [];
            let total;
            for (let i = 2; i <= numero; i++) {
              if (primos.every((prime) => i % prime !== 0))
                primos.push(i);
            }
            total = primos.reduce((sum, prime) => sum + prime, 0);
            setTotalSuma(total);
        }
    },[numero])
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
export default SumaNumerosPrimos;
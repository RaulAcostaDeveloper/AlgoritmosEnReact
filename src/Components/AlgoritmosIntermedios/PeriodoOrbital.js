import { useEffect, useState } from "react";

const PeriodoOrbital  = ()=>{
    const [number, setNumber] = useState('');
    const [periodoOrbital, setPeriodoOrbital] = useState('');
    const [arr, setArr] = useState([{name:'', avgAlt:''}]);
    useEffect(()=>{
        if (number>0) {
            setArr([{name:'', avgAlt:number}]);
        }
    },[number])
    useEffect(()=>{
        if (number>0) {
            var GM = 398600.4418
            var earthRadius = 6367.4447
            let temp=[]
            for (let i in arr) {
              var orbitsLengthPower3 = Math.pow((arr[i].avgAlt + earthRadius), 3)
              var rightHand = Math.pow((orbitsLengthPower3 / GM), 0.5)
              var orbitalPer = Math.round(2 * Math.PI * rightHand)
            temp = {name: arr[i].name, orbitalPeriod: orbitalPer}
            }
            setPeriodoOrbital(temp.orbitalPeriod)
        } else {
            setPeriodoOrbital(0);
        }
    },[number])
    return (
        <>
        <div className="block100">
            <p>Usando la tercera ley de Kepler, calcula el periodo orbital elíptico del objeto.</p>
        </div>
        <div className="block100">
            <img src="./formulaKepler.png" alt="Fórmula de Kepler"/>
        </div>
        <div className="block100">
            <p>a es el eje mayor de la órbita</p>
        </div>
        <div className="block100">
            <p>μ=GM es el estándar grabitacional</p>
        </div>
        <div className="block100">
            <p>G es la constante grabitacional del planeta tierra</p>
        </div>
        <div className="block100">
            <p>M es la masa del planeta tierra</p>
        </div>
        <div className="block100">
            <input placeholder="Ingresa la altura media del objeto" type={'number'} value={number} onChange={(e)=>setNumber(e.target.value)}/>
        </div>
        {(periodoOrbital>0)&&
        <div className="block100">
            <p>Si la altura media es {number}, el periodo orbital es {periodoOrbital}</p>
        </div>
        }
        </>
    )
}
export default PeriodoOrbital;
import { useEffect, useState } from "react";

const BinarioAString = ()=>{
    const [value, setValue] = useState('');
    const [bin, setBin] = useState('');
    const [esBin, setEsBin] = useState(false);
    const [res, setRes] = useState('');
    const handleBin = (value) => {
        if (value==0 || value ==1) {
            setBin(bin.concat(value));
            let divisible4 = bin.concat(value).length/4;
            if (Number.isInteger(divisible4)) {
                setEsBin(true);
            } else{
                setEsBin(false);
            }
        } else {
            setEsBin(false);
        }
    }
    useEffect(()=>{
        if (esBin) {
            let resTemp = bin.split(' ').map(function(bi) {
                    return String.fromCharCode(parseInt(bi, 2)); 
                }).join(''); 
            setRes(resTemp);
        }
    },[esBin])
    return (
        <>
        <div className="block100">
            <input placeholder="Introduce aquí una cadena binaria" value={value} 
            onChange={(e)=>{handleBin(e.target.value); setValue('');}}/>
        </div>
        {bin.length>0 &&
        <>
        <div className="block100">
            <p>{bin}</p>
        </div>
            {esBin===false&&  
            <div className="block100">
                <p>Los valores binarios solo pueden tener los caracteres 0 y 1, y van de 4 en 4</p>
            </div>
            }
        </>
        }
        {(res.length>0)&&
        <>
        <div className="block100">
            <p>El resultado es <b>{res}</b></p>
        </div>
        <div className="block100">
            <button onClick={()=>{setBin(''); setRes('');}}>Reset</button>
        </div>
        </>
        }
        </>
    )
}
export default BinarioAString;
import { useEffect, useState } from "react";

const StringABinario = ()=>{
    const [value, setValue] = useState('');
    const [bin, setBin] = useState('');
    useEffect(()=>{
        if (value.length>0) {
            let cadena =  encodeURIComponent( value );
            let chr, i = 0, l = cadena.length, out = '';
            for( ; i < l; i ++ ){
                chr = cadena.charCodeAt( i ).toString( 2 );
                while( chr.length % 8 !== 0 ){ chr = '0' + chr; }
                out += chr;
            }
            out = out.split('').join(' ');
            setBin(out);
        }
    },[value]);
    return (
        <>
        <div className="block100">
            <input placeholder="Escribe aqui" value={value} 
            onChange={(e)=>setValue(e.target.value)}/>
        </div>
        {(value.length>0)&&        
        <div className="block100">
            <p>El resultado binario es <b>{bin}</b></p>
        </div>
        }
        </>
    )
}
export default StringABinario;
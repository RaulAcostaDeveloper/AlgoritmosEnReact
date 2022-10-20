import { useEffect, useState } from "react";

const EntidadesHTML = ()=>{
    const [cadena, setCadena] = useState('');
    const [cadenaRes, setCadenaRes] = useState('');

    useEffect(()=>{
        if (cadena.length>0) {            
            let temp = cadena.split("");          
            for (let i = 0; i < temp.length; i++) {
              switch (temp[i]) {
                case "":
                    temp[i] = '&nbsp;';
                    break;
                case "<":
                    temp[i] = "&lt;";
                    break;
                case "&":
                    temp[i] = "&amp;";
                    break;
                case ">":
                    temp[i] = "&gt;";
                    break;
                case '"':
                    temp[i] = "&quot;";
                    break;
                case "'":
                    temp[i] = "&apos;";
                    break;
                case "¢":
                    temp[i] = "&cent;";
                    break;
                case "£":
                    temp[i] = "&pound;";
                    break;
                case "¥":
                    temp[i] = "&yen;";
                    break;
                case "€":
                    temp[i] = "&euro;";
                    break;
                case "©":
                    temp[i] = "&copy;";
                    break;
                case "®":
                    temp[i] = "&reg;";
                    break;
                default:
                    break;
              }
            }
            temp = temp.join("");
            setCadenaRes(temp);
        }
    },[cadena])
    return (
        <>
        <div className="block100">
            <p>Algunos caracteres reservados son &lt; &gt; &amp; &quot; &apos;</p>
        </div>
        <div className="block100">
            <input placeholder="Escribe aquí" value={cadena} onChange={(e)=> setCadena(e.target.value)}/>
        </div>
        {(cadenaRes.length>0)&&
            <div className="block100">
                <p>La cadena resultante es <b>{cadenaRes}</b> </p>
            </div>
        }
        </>
    )
}
export default EntidadesHTML;
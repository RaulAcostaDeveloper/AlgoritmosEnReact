import { useState, useEffect } from "react";

const PigLatin = ()=>{
    const [value, setValue] = useState('');
    const [res, setRes] = useState('');
    //Este ejercicio causa conflicto por su carencia de sentido.
    useEffect(()=>{
        if (value.length>0) {
            let temp = value;
            temp = temp
            .replace(/^[aeiou]\w*/, "$&way")
            .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");

            setRes(temp);
        }
    },[value])

    return (
        <>
        <div className="block100">
            <p>Contexto: El pig latín es un juego que modifica las palabras que comienzan con sonidos de consonantes, se mueven todas las consonantes antes de la primera vocal al final y se agrega la sílaba ay (pronunciada ei ).</p>
        </div>
        <div className="block100">
            <p>Si la palabra inicia con consonante, la mueve al final y añade "ay".</p>
        </div>
        <div className="block100">
            <p>Si la palabra inicia con vocal, añade "way" al final.</p>
        </div>
        <div className="block100">
            <p>Notese que, algunos de estos ejercicios solo tienen valor por su complejidad, no porque resuelvan una necesidad.</p>
        </div>
        <div className="block100">
            <input placeholder="Escribe aquí" value={value} onChange={(e)=>setValue(e.target.value)}/>
        </div>

        {(res.length>0)&&
        <div className="block100">
            <p>El resultante es <b>{res}</b></p>
        </div>
        }
        </>
    )
}
export default PigLatin;
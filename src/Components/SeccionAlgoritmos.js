import '../Styles/SeccionAlgoritmos.css';
import ContenedorAlgoritmo from './ContenedorAlgoritmo';
// Algoritmos
import DeterminaSiEsPalindromo from './Algoritmos/DeterminarSiEsPalindromo';
import ConvertirCelsiusAFahrenheit from './Algoritmos/ConvertirCelsiusAFahrenheit';
import DeterminaSiEsNumeroPar from './Algoritmos/DeterminaSiEsNumeroPar';
import RevertirUnString from './Algoritmos/RevertirUnString';
import Factorial from './Algoritmos/Factorial';
import LongitudDeCadenaMasLarga from './Algoritmos/LongitudDeCadenaMasLarga';
import EvaluaValorFinalDeCadena from './Algoritmos/EvaluaValorFinalDeCadena';
import MultiplicaUnaCadena from './Algoritmos/MultiplicaUnaCadena';
import MayusculaEnCadaPalabra from './Algoritmos/MayusculaEnCadaPalabra';
import AcomodaNumeroEnArray from './Algoritmos/AcomodaNumeroEnArray';
const SeccionAlgoritmos = () => {
    return (
        <div className="seccionAlgoritmos">
            <h2>Algoritmos básicos</h2>
            <ContenedorAlgoritmo titulo={'Determina si es número par'}>
                <DeterminaSiEsNumeroPar/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo={'Determina si es palíndromo'}>
                <DeterminaSiEsPalindromo/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo={'Convierte Celsius a Fahrenheit'}>
                <ConvertirCelsiusAFahrenheit/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Revertir un string'}>
                <RevertirUnString/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Obtener el factorial de un número'}>
                <Factorial/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Encontrar la longitud de la cadena más larga en el string'}>
                <LongitudDeCadenaMasLarga/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Evalúa el valor final de una cadena'}>
                <EvaluaValorFinalDeCadena/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Multiplica una cadena'}>
                <MultiplicaUnaCadena/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Pone mayúscula en cada palabra'}>
                <MayusculaEnCadaPalabra/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Acomoda un número en el arreglo'}>
                <AcomodaNumeroEnArray/>
            </ContenedorAlgoritmo>
        </div>
    )
}
export default SeccionAlgoritmos;
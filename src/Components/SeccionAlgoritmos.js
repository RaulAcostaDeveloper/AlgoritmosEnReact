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
import CadenaContieneLetras from './Algoritmos/CadenaContieneLetras';
import SeparaCadenaEnPedazos from './Algoritmos/SeparaCadenaEnPedazos';
// Algoritmos intermedios
import SumaNumerosEnUnRango from './AlgoritmosIntermedios/SumaNumerosEnUnRango';
import DiferenciaSimetricaDeDosArrays from './AlgoritmosIntermedios/DiferenciaSimetricaDeDosArrays';
import RemueveElementosDelArreglo from './AlgoritmosIntermedios/RemueveElementosDelArreglo';
import SpinalCase from './AlgoritmosIntermedios/SpinalCase';
import PigLatin from './AlgoritmosIntermedios/PigLatin';
import Reemplazar from './AlgoritmosIntermedios/Reemplazar';
import ParesDNA from './AlgoritmosIntermedios/ParesDNA';
import LetraFaltante from './AlgoritmosIntermedios/LetraFaltante';
import ArregloConValoresUnicos from './AlgoritmosIntermedios/ArregloConValoresUnicos';
import EntidadesHTML from './AlgoritmosIntermedios/EntidadesHTML';
import SumaImparesFibonacci from './AlgoritmosIntermedios/SumaImparesFibonacci';
import SumaNumerosPrimos from './AlgoritmosIntermedios/SumaNumerosPrimos';
import MinimoComunMultiplo from './AlgoritmosIntermedios/MinimoComunMultiplo';
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
            <ContenedorAlgoritmo titulo = {'Evalúa si la cadena contiene todos los caracteres'}>
                <CadenaContieneLetras/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Separa una cadena en pedazos'}>
                <SeparaCadenaEnPedazos/>
            </ContenedorAlgoritmo>
            <h2>Algoritmos intermedios</h2>
            <ContenedorAlgoritmo titulo = {'Suma los números en un rango'}>
                <SumaNumerosEnUnRango/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Muestra la diferencia simétrica entre dos arreglos'}>
                <DiferenciaSimetricaDeDosArrays/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Remover elementos del primer arreglo'}>
                <RemueveElementosDelArreglo/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Convertir a spinal-case'}>
                <SpinalCase/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Pig Latin'}>
                <PigLatin/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Reemplazar la palabra'}>
                <Reemplazar/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Pares DNA'}>
                <ParesDNA/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Encuentra el primer caracter faltante en un rango'}>
                <LetraFaltante/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Arreglo con valores únicos'}>
                <ArregloConValoresUnicos/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Convertir caracteres reservados a entidades HTML'}>
                <EntidadesHTML/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Suma los impares del fibonacci'}>
                <SumaImparesFibonacci/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Suma los números primos dentro del número'}>
                <SumaNumerosPrimos/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Calcula el mínimo común múltiplo'}>
                <MinimoComunMultiplo/>
            </ContenedorAlgoritmo>
        </div>
    )
}
export default SeccionAlgoritmos;
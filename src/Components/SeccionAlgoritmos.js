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
import DevuelveElementosAPartirDeCiertoPunto from './AlgoritmosIntermedios/DevuelveElementosAPartirDeCiertoPunto';
import BinarioAString from './AlgoritmosIntermedios/BinarioAString';
import StringABinario from './AlgoritmosIntermedios/StringABinario';
const SeccionAlgoritmos = () => {
    return (
        <div className="seccionAlgoritmos">
            <h2>Algoritmos b??sicos</h2>
            <ContenedorAlgoritmo titulo={'Determina si es n??mero par'}>
                <DeterminaSiEsNumeroPar/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo={'Determina si es pal??ndromo'}>
                <DeterminaSiEsPalindromo/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo={'Convierte Celsius a Fahrenheit'}>
                <ConvertirCelsiusAFahrenheit/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Revertir un string'}>
                <RevertirUnString/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Obtener el factorial de un n??mero'}>
                <Factorial/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Encontrar la longitud de la cadena m??s larga en el string'}>
                <LongitudDeCadenaMasLarga/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Eval??a el valor final de una cadena'}>
                <EvaluaValorFinalDeCadena/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Multiplica una cadena'}>
                <MultiplicaUnaCadena/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Pone may??scula en cada palabra'}>
                <MayusculaEnCadaPalabra/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Acomoda un n??mero en el arreglo'}>
                <AcomodaNumeroEnArray/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Eval??a si la cadena contiene todos los caracteres'}>
                <CadenaContieneLetras/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Separa una cadena en pedazos'}>
                <SeparaCadenaEnPedazos/>
            </ContenedorAlgoritmo>
            <h2>Algoritmos intermedios</h2>
            <ContenedorAlgoritmo titulo = {'Convierte binario a una cadena'}>
                <BinarioAString/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Convierte una cadena a binario'}>
                <StringABinario/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Calcula el m??nimo com??n m??ltiplo'}>
                <MinimoComunMultiplo/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Pares DNA'}>
                <ParesDNA/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Convertir caracteres reservados a entidades HTML'}>
                <EntidadesHTML/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Muestra la diferencia sim??trica entre dos arreglos'}>
                <DiferenciaSimetricaDeDosArrays/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Suma los n??meros en un rango'}>
                <SumaNumerosEnUnRango/>
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
            <ContenedorAlgoritmo titulo = {'Encuentra el primer caracter faltante en un rango'}>
                <LetraFaltante/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Arreglo con valores ??nicos'}>
                <ArregloConValoresUnicos/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Suma los impares del fibonacci'}>
                <SumaImparesFibonacci/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Suma los n??meros primos dentro del n??mero'}>
                <SumaNumerosPrimos/>
            </ContenedorAlgoritmo>
            <ContenedorAlgoritmo titulo = {'Devuelve los elementos a partir del elemento que cumpla la condicional'}>
                <DevuelveElementosAPartirDeCiertoPunto/>
            </ContenedorAlgoritmo>

        </div>
    )
}
export default SeccionAlgoritmos;
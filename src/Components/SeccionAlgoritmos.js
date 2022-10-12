import '../Styles/SeccionAlgoritmos.css';
import ContenedorAlgoritmo from './ContenedorAlgoritmo';
// Algoritmos
import DeterminaSiEsPalindromo from './Algoritmos/DeterminarSiEsPalindromo';
import ConvertirCelsiusAFahrenheit from './Algoritmos/ConvertirCelsiusAFahrenheit';
import DeterminaSiEsNumeroPar from './Algoritmos/DeterminaSiEsNumeroPar';
import RevertirUnString from './Algoritmos/RevertirUnString';
const SeccionAlgoritmos = () => {
    return (
        <div className="seccionAlgoritmos">
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
        </div>
    )
}
export default SeccionAlgoritmos;
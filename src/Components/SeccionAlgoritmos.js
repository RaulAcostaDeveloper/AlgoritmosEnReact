import '../Styles/SeccionAlgoritmos.css';
import ContenedorAlgoritmo from './ContenedorAlgoritmo';
import DeterminaSiEsPalindromo from './Algoritmos/DeterminarSiEsPalindromo';
import ConvertirCelsiusAFahrenheit from './Algoritmos/ConvertirCelsiusAFahrenheit';
// Algoritmos
import DeterminaSiEsNumeroPar from './Algoritmos/DeterminaSiEsNumeroPar';
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
        </div>
    )
}
export default SeccionAlgoritmos;
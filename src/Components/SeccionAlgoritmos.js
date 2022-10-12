import '../Styles/SeccionAlgoritmos.css';
import ContenedorAlgoritmo from './ContenedorAlgoritmo';
import DeterminaSiEsPalindromo from './Algoritmos/DeterminarSiEsPalindromo';
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
        </div>
    )
}
export default SeccionAlgoritmos;
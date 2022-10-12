import '../Styles/SeccionAlgoritmos.css';
import ContenedorAlgoritmo from './ContenedorAlgoritmo';

// Algoritmos
import DeterminaSiEsNumeroPar from './Algoritmos/DeterminaSiEsNumeroPar';
const SeccionAlgoritmos = () => {
    return (
        <div className="seccionAlgoritmos">
            <ContenedorAlgoritmo titulo={'Determina si es número par'}>
                <DeterminaSiEsNumeroPar/>
            </ContenedorAlgoritmo>
        </div>
    )
}
export default SeccionAlgoritmos;
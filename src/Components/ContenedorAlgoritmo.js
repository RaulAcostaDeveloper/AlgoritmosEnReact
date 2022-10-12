import '../Styles/ContenedorAlgoritmo.css';
const ContenedorAlgoritmo = ({titulo, children}) => {
    return (
        <div className="contenedorAlgoritmo">
            <h3 className='titulo'>{titulo}</h3>
            <div className='children'>
                {children}
            </div>
        </div>
    )
}
export default ContenedorAlgoritmo;
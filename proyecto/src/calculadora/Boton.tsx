interface IBoton {
    operacion: boolean,
    texto: string | number
}


export const Boton = ({ operacion, texto }: IBoton) => {
    const setNumero = () => { return true }
    const setTipoOperacion = () => { return true }

    const accion = () => operacion ? setTipoOperacion() : setNumero()

    return (
        <button type='button' onClick={accion}>{texto}</button>
    )
}

export default Boton

interface IHelloWorld {
    nombre: string,
    ciudad?: string,
    clase?: number,
}

function HelloWorld({ nombre, clase, ciudad }: IHelloWorld) {
    const estiloDiv = {
        border: "2px dotted red",
        padding: "1em",
        marginBottom: "1em",
        backgroundColor: "#DDD"
    }
    
    // renderizamos el contenido del componente
    return (<div style={estiloDiv} className="HelloWorld">
        Hola {nombre}, soy el componente HelloWorld de react.js <br />
        Soy de {ciudad} <br />
        Estoy en la clase de {clase}
    </div>)
}

export default HelloWorld

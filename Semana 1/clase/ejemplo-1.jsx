function Hello(props){
    // Código y funcionalidad de nuestro componente
    let saludo = props.texto

    return <div>
        {saludo}
    </div>
}

function App(){
    return <Hello texto="">  </Hello>
}
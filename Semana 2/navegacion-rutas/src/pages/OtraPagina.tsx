import { Link } from "react-router";

export function OtraPagina(){
    return <div>
        <h2>Esta página contiene texto extra</h2>
        <p>Este contenido está solamente en la página otra</p>
        <Link to="/">Regresar al home</Link> <br/>
        <Link to="/este-enlace-no-existe">Enlace roto</Link><br/>
        <Link to="/error">Mostrar la página de error</Link>
    </div>
}

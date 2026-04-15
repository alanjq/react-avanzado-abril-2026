import { Link } from "react-router";

export function ErrorPage(){
    return <section>
        <h1>La página solicitada no se encuentra</h1>
        <Link to={"/"}>Ir al inicio</Link>
    </section>
}

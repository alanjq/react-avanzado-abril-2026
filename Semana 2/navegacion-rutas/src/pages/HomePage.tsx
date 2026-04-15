import { Link } from "react-router";

interface IHomePage { }

export function HomePage({ }: IHomePage) {
    return (
        <section>
            <div>
                <h1>Home Page</h1>
            </div>
            <div>
                <label>Esta es la página de inicio</label>
            </div>
            <div>
                <Link to="/otro">Otra página</Link>
                <br />
                <Link to="/">Home</Link>
                <br />
                <Link to="/esta-pagina-no-funciona">Error</Link>
            </div>
        </section>
    )

}

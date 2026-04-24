import { Outlet } from "react-router";

export function CiudadesLayout() {
    return (
        <div>
            <h2>Clima en ciudades</h2>
            [nombre de la ciudad]

            <hr />

            {/* Se carga el contenido dentro del componente como children usando Outlet */}
            <Outlet />

        </div>
    )
}

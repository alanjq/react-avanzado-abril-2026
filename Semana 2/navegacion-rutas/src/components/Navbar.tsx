import { NavLink } from "react-router";

export function Navbar(){
    return <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/calculadora">Calculadora</NavLink>
        <NavLink to="/clima">Clima</NavLink>
    </nav>
}

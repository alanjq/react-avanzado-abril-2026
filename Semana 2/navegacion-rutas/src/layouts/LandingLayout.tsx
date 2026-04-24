import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export function LandingLayout() {
    return <>
        <Navbar />
        <hr />

        <main>
            <Outlet />
        </main>

        <hr />
        <footer>
            Pie del sitio.
            Diego, Melitón, Aaron
        </footer>
    </>
}

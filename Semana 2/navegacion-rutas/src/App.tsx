import { Route, Routes } from "react-router";
import { LandingLayout } from "./layouts/LandingLayout";
import { CalculadoraPage } from "./pages/CalculadoraPage";
import { ClimaPage } from "./pages/ClimaPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { CiudadesLayout } from "./layouts/CiudadesLayout";

interface IApp { }

export default function App({ }: IApp) {

    return (
        <Routes>
            {/* Todas las rutas dentro de / */}
            <Route path="/" element={<LandingLayout />}>
                <Route index element={<HomePage />} />
                <Route path="calculadora" element={<CalculadoraPage />} />
                <Route path="clima" element={<CiudadesLayout />}>
                    <Route index element={<ClimaPage />} />
                </Route>
            </Route>

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

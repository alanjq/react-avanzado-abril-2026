import { Route, Routes } from "react-router";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { OtraPagina } from "./pages/OtraPagina";

interface IApp { }

export default function App({ }: IApp) {

    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="otro" element={<OtraPagina />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

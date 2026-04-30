import { useState } from "react";
import '../app.css';
import { CalculadoraContext } from "../CalculadoraContext";
import IngresoNumero from "./IngresoNumero";
import { Pantalla } from "./Pantalla";

export function CalculadoraApp() {
    const [resultado, setResultado] = useState(0)
    const [valorNuevo, setValorNuevo] = useState(0)


    return (
        <CalculadoraContext value={{ resultado, setResultado, valorNuevo, setValorNuevo }} >
            <Pantalla />
            <IngresoNumero />
        </CalculadoraContext>
    )
}
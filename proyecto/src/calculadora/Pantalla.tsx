import { useContext, useEffect, useState } from "react"
import { CalculadoraContext } from "../CalculadoraContext"

export function Pantalla() {
    const [numero, setNumero] = useState(0)
    const context = useContext(CalculadoraContext)
    console.log('Contexto:Calculadora', context)

    useEffect(()=>{
        setNumero(context?.resultado || 0)
    }, [])

    useEffect(() => {
        setNumero(context?.resultado)
        console.log('valor actualizado', context?.resultado)
    }, [context?.resultado])

    return (
        <section className="pantalla">
            <div className="pantalla-resultado">{numero}</div>
        </section>
    )
}

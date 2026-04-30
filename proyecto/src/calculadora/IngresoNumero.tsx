import { useContext, useRef, useState } from "react"
import { CalculadoraContext } from "../CalculadoraContext"

export const IngresoNumero = () => {
    const refText = useRef(null)
    const context = useContext(CalculadoraContext)

    const updateTextValue = () =>{
        console.log(refText.current?.value)
         context?.setValorNuevo(parseFloat(refText.current?.value))
        }

    return (
        <input type="number" ref={refText} onInput={updateTextValue} />
    )
}
export default IngresoNumero

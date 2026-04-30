import { createContext, useState } from "react";

export const CalculadoraContext = createContext({})

// Crear un proveedor de contexto
export const CalculadoraProvider = ({ children }: any) => {
    const [resultado, setResultado] = useState(0)
    // const [valorNuevo, setValorNuevo] = useState(0)
    // const [tipoOperacion, setTipoOperacion] = useState("")

    // const refText = useRef(null)

    // const updateTextValue = () => setValorNuevo(parseFloat(refText.current?.value))


    // Operaciones disponibles
    // const suma = (a: number, b: number) => a + b
    // const resta = (a: number, b: number) => a - b
    // const multiplicacion = (a: number, b: number) => a * b
    // const division = (a: number, b: number) => a / b

    // // Realiza la operación de acuerdo al botón presionado
    // const realizarOperacion = () => {
    //     let a = resultado
    //     let b = valorNuevo
    //     let res = 0;

    //     switch (tipoOperacion) {
    //         case "+": res = suma(a, b); break;
    //         case "-": res = resta(a, b); break;
    //         case "*": res = multiplicacion(a, b); break;
    //         case "/": res = division(a, b); break;
    //     }
    //     setResultado(res)
    // }


    // const BOTONES = [
    //     [7, 8, 9, "/"],
    //     [4, 5, 6, "*"],
    //     [1, 2, 3, "-"],
    //     [".", 0, "=", "+"],
    // ]


    // // Permitir identificar el tipo de botón
    // const identificaBoton = (valor) => {
    //     if (valor === '.') {
    //         return;
    //     }

    //     if (!isNaN(valor)) {
    //         // Valores numéricos
    //         let nuevo = Number(refText.current.value) + valor
    //         refText.current.value = nuevo
    //         setValorNuevo(nuevo)
    //         console.log("es un número", valor)
    //     } else if (valor === "=") {
    //         realizarOperacion()
    //         setValorNuevo(0)
    //         refText.current.value = 0
    //         setTipoOperacion("")
    //     } else {
    //         // + - / *
    //         if (valor !== "") {
    //             realizarOperacion()
    //             refText.current.value = 0
    //         }
    //         setTipoOperacion(valor)
    //         // refText.current.value = 0

    //         console.log("es una operación", valor)
    //     }
    // }

    return (
        <CalculadoraContext.Provider value={{ CalculadoraContext}}>
            {children}
        </CalculadoraContext.Provider>
    )

}


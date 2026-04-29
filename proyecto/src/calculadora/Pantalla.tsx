import { useEffect, useState } from "react"

export function Pantalla() {
    // Validar y corregir el valor esperado
    const [numeroA, setNumeroA] = useState(0)
    const getNumeroA = () => numeroA || 0
    // Botones
    const FILA_1 = [7, 8, 9]
    const FILA_2 = [4, 5, 6]
    const FILA_3 = [1, 2, 3]

    // const [numeroB, setNumeroB] = useState(0) -> valorActual

    const [valorActual, setValorActual] = useState(getNumeroA())

    // Operaciones
    const sumar = () => {
        let resultado = valorActual + getNumeroA()
        console.log(resultado)
        setValorActual(resultado)
    }

    const restar = () => {
        let resultado = valorActual - getNumeroA()
        console.log(resultado)
        setValorActual(resultado)
    }
    const multiplicar = () => {
        let resultado = valorActual * getNumeroA()
        console.log(resultado)
        setValorActual(resultado)
    }
    const dividir = () => {
        let resultado = valorActual / getNumeroA()
        console.log(resultado)
        setValorActual(resultado)
    }

    // useEffect(() => {
    //     setValorActual(getNumeroA())
    // }, [numero])

    const actualizarNumero = ({ target }: any) => {
        setNumeroA(Number(target.value))
        console.log(target)
    }

    const ponerNumero = (numero: number) => {
        setNumeroA(numero)
        console.log('número ahora vale', numero)
    }

    return (
        <section className="pantalla">
            <div className="pantalla-resultado">{valorActual}</div>
            <input type="text" placeholder="888,888.88" onInput={actualizarNumero} />

            <button type="button" onClick={sumar}>+</button>
            <button type="button" onClick={restar}>-</button>
            <button type="button" onClick={multiplicar}>*</button>
            <button type="button" onClick={dividir}>/</button>


            <div>
                {FILA_1.map((n, i) =>
                    <button key={i} type="button" onClick={() => ponerNumero(n)}>{n}</button>
                )}
            </div>
            <div>
                {FILA_2.map((n, i) =>
                    <button key={i} type="button" onClick={() => ponerNumero(n)}>{n}</button>
                )}
            </div>
            <div>
                {FILA_3.map((n, i) =>
                    <button key={i} type="button" onClick={() => ponerNumero(n)}>{n}</button>
                )}
            </div>

        </section>
    )
}

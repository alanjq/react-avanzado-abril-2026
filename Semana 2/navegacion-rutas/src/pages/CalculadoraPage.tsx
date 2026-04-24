interface ICalculadoraPage {
    children?: any,
}

export function CalculadoraPage({ children }: ICalculadoraPage) {
    return <div>
        <h1>Calculadora</h1>
        {children}
    </div>
}

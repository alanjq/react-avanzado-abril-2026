interface IClimaPage {
    children?: any,
}

export function ClimaPage({ children }: IClimaPage) {
    return <div>
        <h1>Clima</h1>
        {children}
    </div>
}

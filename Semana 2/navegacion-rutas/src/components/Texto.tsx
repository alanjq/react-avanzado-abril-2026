interface ITexto {
    children?: any,
    size?: string
}

export function Texto({ size, children }: ITexto) {
    const style = {
        fontSize: size
    }
    return <label style={style}>{children}</label>
}

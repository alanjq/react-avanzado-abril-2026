interface IVista{
    children?: any
}

export function Vista({children} : IVista){
    return (
        <div>
            {children}
        </div>
    )
}
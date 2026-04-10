interface IHeading {
    children: any
}

export function Heading({ children }: IHeading) {
    return <h1>{children}</h1>
}

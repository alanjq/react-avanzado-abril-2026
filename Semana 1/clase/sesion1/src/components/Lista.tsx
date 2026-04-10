import { useState } from "react"

export function Lista() {
    const nombres = ["Alan", "Aaron", "Diego", "Melitón"]

    return <ol>
        {nombres.map((nombre, index) =>
            <ListItem nombre={nombre} id={index} />
        )}
    </ol>
}

interface IListItem {
    nombre: string,
    id: number
}
function ListItem({ nombre, id }: IListItem) {
    const [isVisible, setIsVisible] = useState(true)
    const eliminar= () => setIsVisible(false)

    return <li hidden={!isVisible} key={id}>{nombre} <span onClick={eliminar}>(eliminar)</span></li>
}

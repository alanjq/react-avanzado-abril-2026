import './Calculadora.css'
export function Calculadora() {
    const botones = [
        [7, 8, 9, "/"],
        [4, 5, 6, "*"],
        [1, 2, 3, "-"],
        [".", 0, "=", "+"],
    ]

    return (
        <div style={styles.contenedor} className='calculadora-contenedor '>
            <h1 style={styles.titulo}>Calculadora</h1>
            <input type="text" style={styles.numeros} placeholder="888,888.88" />

            <div style={styles.contenedorBotones}>
                {botones.map((fila, i) =>
                    <div style={styles.filaBoton} key={i}>
                        {fila.map((textoBoton, j) =>
                            <button type="button" style={styles.boton} key={j}> {textoBoton}</button>
                        )}
                    </div>
                )}
                {/* <div style={styles.filaBoton}>
                    <button style={styles.boton} type="button">7</button>
                    <button style={styles.boton} type="button">8</button>
                    <button style={styles.boton} type="button">9</button>
                    <button style={styles.boton} type="button">/</button>
                </div> */}
            </div>

            <p style={styles.pie}>Acerca de la calculadora</p>
        </div>
    )
}

const styles = {
    contenedor: {
        backgroundColor: "#3A3737",
        color: "#CDD7A6"
    },
    titulo: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: "20px"
    },
    numeros: {
        marginTop: 10,
        marginBottom: 20,
        textAlign: "right",
        width: "100%",
        fontSize: "1.5em",
        backgroundColor: "transparent",
        border: 0,
        color: "#CBF28B"
    },
    contenedorBotones: {
        marginTop: "28px"
    },
    filaBoton: {
        display: "flex",
        gap: "1.5em",
        marginBottom: "1.5em",
    },
    boton: {
        borderRadius: "10px",
        display: "flex",
        flex: 1,
        fontSize: 20,
        textAlign: "center",
        paddingTop: "1em",
        paddingBottom: "1em",
    },
    pie: {
        position: "absolute",
        textAlign: "right",
    }
}

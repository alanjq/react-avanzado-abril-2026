import { useState } from 'react'
import './app.css'
import { Pantalla } from './calculadora/Pantalla'

export function App() {
  const [valor, setValor] = useState(0)

  const sumar = (a, b) => a + b

  const probar = () => {
    let resultado = sumar(5, 3)
    setValor(resultado)

    console.log("Resultado de la suma (5+3)=", resultado)
  }



  return (<div>
    <h1>Calculadora</h1>

    <Pantalla numero={valor} />

    <button onClick={probar} type='button'>Probar funcionalidad</button>

      {/* Botones */}
  </div>)
}

export default App

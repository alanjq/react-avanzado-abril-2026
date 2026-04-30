// import { useEffect, useRef, useState } from 'react'
import './app.css'
import { Pantalla } from './calculadora/Pantalla'
// import Boton from './calculadora/Boton'

export function App() {
  
  return (<div>
    <h1>Calculadora</h1>

    <Pantalla valor={10} />
{/* 
    <input type="number" ref={refText} onInput={updateTextValue} />

    {/* Botones *

    <section>
      {BOTONES.map((fila, k) =>
        <div key={k}>
          {fila.map((boton, key) =>
            <Boton key={key} operacion={isNaN(boton)} texto={boton}  />
          )}
        </div>
      )}
    </section> */}

  </div>)
}

export default App

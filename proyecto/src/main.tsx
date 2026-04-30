import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CalculadoraApp } from './calculadora/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CalculadoraApp />
  </StrictMode>,
)

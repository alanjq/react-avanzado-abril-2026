import './App.css'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { Heading } from './components/Heading.tsx'
import HelloWorld from './components/HelloWorld.tsx'
import { Lista } from './components/Lista.tsx'

function App() {

  return (
    <>
      <Header />

      <main>

        <Heading>
          Listado de nombres
        </Heading>

        <Lista /> 

        {/* <HelloWorld nombre='Alan' /> */}
        
      </main>

      <Footer />
    </>
  )
}

export default App

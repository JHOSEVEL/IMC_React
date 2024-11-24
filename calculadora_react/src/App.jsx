import { useState } from 'react'
import IMCCalculado from './components/calculaIMC.jsx'
import './App.css'

function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')

  return (
      <>
          <h1>Calcule seu IMC!</h1>

          <input type="number" placeholder='Insira a sua altura em cm' required onBlur={(e) => setAltura(e.target.value)}/>
          <input type="number" placeholder='Insira o seu peso em kg' required onBlur={(e) => setPeso(e.target.value)}/>

          <IMCCalculado altura={altura} peso={peso} ></IMCCalculado>

          <footer>&#169; JOSEVEL SILVA - EBAC - 2024</footer>
      </>
  )
}

export default App

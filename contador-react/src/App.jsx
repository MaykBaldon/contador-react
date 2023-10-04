import { useState } from 'react'
import './index.css'
import styled from "styled-components"


export default function App() {
  const [numero, setNumero] = useState(0)

  const mais = () => {
    if (numero < 10) (
      setNumero(numero + 1)
    )
  }

  const zero = () => {
  setNumero(0)
  }

  const menos = () => {
    if (numero > 0) (
      setNumero(numero - 1)
    )
  }


  return (
    <main>
      <section>
        <h1>Contador</h1>
        <h2>{numero}</h2>
        <div>
          <button onClick={mais}>+ 1</button>
          <button onClick={zero}>Reset</button>
          <button onClick={menos}>- 1</button>
        </div>
        <p>Created by: Mayk Baldon</p>
      </section>
    </main>
  )
}


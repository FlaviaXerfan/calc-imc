import React from 'react'
import Calculadora from './Calculadora'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'

export default function App() {
  
  return (
    <div>
      <Cabecalho titulo="Bem vindo à nossa calculadora de IMC"/>
      <Calculadora/>
      <Rodape nome="Flavia Xerfan"/>
    </div>
  )
}




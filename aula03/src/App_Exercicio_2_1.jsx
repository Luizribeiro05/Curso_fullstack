import React from 'react'
import './App.css'
import CelsiusParaFahrenheit from './components/CelsiusParaFahrenheit'
import FahrenheitParaCelsius from './components/FahrenheitParaCelsius'

const App = (props) => {
  return (
    <div className='container'>
      <h1>Converção de Unidades</h1>
      <CelciusParaFahrenheit celsius = {25} />
    </div>
  )
}

export default App
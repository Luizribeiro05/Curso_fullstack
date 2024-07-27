import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Noticias from './pages/Noticias'
import Dpolgpd from './pages/DpoLgpd'
import Navbar from './components/Navbar'
import VisualizarNoticias from './pages/VisualizarNoticias'

const App = () => {
  return (
    <BrowserRouter>
    <h1>Uniesp - Centro Univercitario</h1>
    <Navbar/>
    <Routes>
      <Route path="/" element ={<Inicial />} />
      <Route path="/noticias" element ={<Noticias />} />
      <Route path="/dpo-Lgpd" element ={<Dpolgpd />} />
      <Route path="/visualizar-noticias/:id" element ={<VisualizarNoticias />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Inicial</Link><br/>
        <Link to="/noticias">Noticias</Link><br/>
        <Link to="/Dpo-Lgpd">Dpo-Lgpd</Link><br/>
    </div>
  )
}

export default Navbar
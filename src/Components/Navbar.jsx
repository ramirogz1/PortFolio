import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Mi Portafolio 💼</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="#">🏡 Home</a>
        <a className="nav-link" href="#about" >👨Sobre Mi</a>
        <a className="nav-link" href="#projects">🎈Proyectos</a>
        <a className="nav-link" href='#Estudios'>🎓Estudios</a>
        <a className="nav-link" href="#Contacto">📨Contacto</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

import React from 'react'
import "./Contacto.css"
import QR from "../assets/images/QR.png"

export default function Contacto() {
  return (
    <div className='PadreCont' id='Contacto'>
        <div className='tituloCont'>
            <h1><u>¡TRABAJEMOS JUNTOS!</u></h1>
        </div>
        <div className='contact'>
          <h2>Email:</h2>
          <div className='info'>

          <h3>ramirogz101@gmail.com</h3>
          </div>
          <h2>Telefono:</h2>
          <div className='info'>

          <h3>+543855761208</h3>
          </div>
          <div className='QR'>
            <img src={QR} alt="" />
          </div>

        </div>
    </div>
  )
}

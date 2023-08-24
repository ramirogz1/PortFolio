import React from "react";
import "./Estudios.css";
import Henry from "../assets/images/certHenry.png";
import Desafio from "../assets/images/certDesafioLat.png";

export default function Estudios() {
  return (
    <div id="Estudios">
      <h1 className="tituloEst"><u>ESTUDIOS</u></h1>
      <div className="PadreEstudio">
        <div className="Estudio">
         
          <p>
            • Full Stack Web Developer <br />
            • Henry Bootcamp <br />• Jul 2022 - Nov 2022
          </p>
          <img src={Henry} alt="" />
        </div>
        <div className="Estudio">
         
          <p>
            • Introduccion al Desarrollo Web <br />
            • Desafio Latam <br />• Ago 2023
          </p>
          <img src={Desafio} alt="" />
        </div>
      </div>
    </div>
  );
}

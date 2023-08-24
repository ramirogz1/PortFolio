import React from "react";
import FotoCV from "../assets/images/ramirocv1copia.jpg";
import "./Home.css"
import Redes from "./Redes";

export default function Home() {
  return (
    <div className="portada">
      <div>
        <h1 className="text-white">
          
          Hola mi nombre es <br /> <br /> <span>Ramiro</span>
          <br /> <br />
          Full Stack <span>Web Developer</span>
        </h1>
        <Redes/>
      </div>
      

      
        <img className="fotoCv" src={FotoCV} alt="foto_cv" title="foto cv" />
     
    </div>
  );
}

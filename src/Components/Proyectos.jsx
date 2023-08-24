import React from "react";
import "./Proyectos.css";
import Igu from "../assets/images/iguana.png";
import Poke from "../assets/images/pokemon.png";
import Cuppon from "../assets/images/Cuppon.png";
export default function Proyectos() {
  return (
    <div className="padreProyect" id="projects">
      <div className="tituloProyect" >
        <h1>
          <u>PROYECTOS</u>
        </h1>
      </div>
      <div className="DescriptionPadre">
        <div className="proyecto">
          <h3>LANDING IGUANA</h3>
          <img src={Igu} alt="" />

          <h5>
            Landing page en que esta basada en ver informacion detallada de
            Iguanas. <br />
            TECNOLOGÍAS: HTML, CSS
          </h5>
          <p>
            Deploy:{" "}
            <a href="https://landing-iguana.vercel.app/" target="_blank">
              https://landing-iguana.vercel.app/
            </a>
          </p>
        </div>
        <div className="proyecto">
          <h3>CUPPON</h3>
          <img src={Cuppon} alt="" />
          <h5>
            Cuppon. Pagina con una vista de una similada pagina para aplicar
            cumpones realizada como practica para desafio latam. <br />
            TECNOLOGÍAS: HTML, CSS, Bootstap
          </h5>
          <p>
            Deploy:{" "}
            <a href="https://cuppon-seven.vercel.app/" target="_blank">
              https://cuppon-seven.vercel.app/
            </a>
          </p>
        </div>
        <div className="proyecto">
          <h3>POKEMON-SPA</h3>
          <img src={Poke} alt="" />
          <h5>
            SPA de Pokémon. Consume datos de la api pokeapi realizando
            subrequest. Se puede filtrar por tipo, origen (api o db). Ordenar
            por nombre y puntos de ataque. Realizar busqueda por nombre exacto.
            Ver informacion mas detallada de cada pokémon y crear nuevos
            pokémons.
            <br />
            TECNOLOGÍAS: Node, Express, React, Redux, Bootstrap, Postgres,
            Sequelize.
          </h5>
          <p>
            Deploy:{" "}
            <a href="https://spa-pokemon.vercel.app/" target="_blank">
              https://spa-pokemon.vercel.app/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

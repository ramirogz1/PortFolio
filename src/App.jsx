import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import SobreMi from "./Components/SobreMi";
import Proyectos from "./Components/Proyectos";
import Estudios from "./Components/Estudios";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SobreMi />
      <Proyectos/>
      <Estudios/>
      <Contacto/>
      <Footer/>
    </>
  );
}

export default App;

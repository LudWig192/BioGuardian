// Home.js
import React from "react";
import Pulseira1 from "../Components/Pulseira";
import Anuncio from "../Components/Anuncio";
import Buttons from "../Components/Botoes_Home";
import Incricao from "../Components/Assinaturas";
import "../Style/Home.css"

function Home() {
  return (
    <>
      <h1> </h1>
      <Anuncio />
      <h1> </h1>
      {/* <Buttons />
      <h1> </h1> */}
      <Pulseira1 />
      <h1> </h1>
      <Incricao />
      <h1> </h1>
    </>
  );
}

export default Home;

//Contato
import React from "react";
import ContatoForm from '../Components/ContatoForm';
import NavbarCCC from '../Components/Navegacao-CCC';
import Footer from "../Components/Footer";
const Contato = () => {
  return (
    <>
      <div>
        <NavbarCCC />
        <ContatoForm />
        <Footer />
      </div>
    </>
  );
};

export default Contato;

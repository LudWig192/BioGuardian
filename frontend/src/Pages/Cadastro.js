import React from "react";
import CadastroForm from "../Components/CadastroForm";
import NavbarCSC from '../Components/Navegacao'
import Footer from "../Components/Footer";

const Cadastro = () => {
  return (
    <>
      <div>
        <NavbarCSC />
        <CadastroForm />
        <Footer />
      </div>
    </>
  );
};

export default Cadastro;
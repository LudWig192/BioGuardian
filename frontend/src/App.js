import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
//Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

//Importar complementos aqui
import Rotas from "./Routes";

//Importar componentes aqui
import Navegacao from "./Components/Navegacao";
// import Sidebar from "./Components/SideBar";

//RODAPE
import Footer from "../src/Components/Footer";


const App = () => {
  return (
    <>
      <Router>
        <Navegacao />
        <Rotas />
        <Footer />  
      </Router>
    </>
  );
};

export default App;
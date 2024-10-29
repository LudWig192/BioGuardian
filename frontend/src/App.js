import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Rotas from "./Routes";
import Footer from "../src/Components/Footer";


const App = () => {
  return (
    <>
      <Router>
        <Rotas />
        <Footer />
      </Router>
    </>
  );
};

export default App;
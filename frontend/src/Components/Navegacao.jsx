import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../Style/Navbar.css";
// import Unidades from '../Pages/Unidades';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Nav1() {
  return (
    <Navbar expand="lg" className="Navbar1">
      <Container fluid className=''>
        <b><Navbar.Brand className='color1' href="#">Navbar </Navbar.Brand></b>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>

            <b><Link className='color1' to="/"> INICIO</Link></b>
            <b><Link className='color1' to="/Beneficio">  BENEFÍCIOS</Link></b>
            <b><Link className='color1' to="/Cadastro"> LOGIN</Link></b>
            <b><Link className='color1' to="/Unidades"> UNIDADES</Link></b>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquisar"
              className="me-2"
              aria-label="Search"
            />
            <Button className='botao-pesquisar' variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav1;
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Tab, Row,Col,Container } from 'react-bootstrap';
import React from "react";
import CrearMesa from './components/CrearMesa.js';
import ListaMesas from './components/ListaMesas.js';
import Dashboard from './components/Dashboard.js';



function App() {

  const nav = () => {
    return  <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="/">Mesas</Navbar.Brand>
            </Navbar>;
  };

  const body = () => {
    return <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3} >
                  <Nav variant="pills" className="flex-column" >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Agregar mesa</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Ver lista de mesas</Nav.Link>
                    </Nav.Item>
                     <Nav.Item>
                      <Nav.Link eventKey="third">Dashboard</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <CrearMesa />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <ListaMesas />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Dashboard />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>;
  };

  return (
    <div>
      <div id="header">
        {nav()}
      </div>
      <div id="body" className="mt-2">
        <Container fluid>
          {body()}
        </Container>
      </div>  
    </div>
  );
}

export default App;

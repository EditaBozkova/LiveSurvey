import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import NavBa from './NavBar';

const CreateS = () => (
    <Container className="p-1">
        <NavBa></NavBa>
        <Jumbotron>
            <h2>Tvorba ankety</h2>
            <p>Dodelat</p>
        </Jumbotron>
    </Container>
);

export default CreateS;
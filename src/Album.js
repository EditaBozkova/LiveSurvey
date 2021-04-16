import React from 'react';
import NavBa from './NavBar';
import { Container, Jumbotron } from 'react-bootstrap';

const Album = () => (
    <Container className="p-1">
        <NavBa></NavBa>
        <Jumbotron>
            <h2>Prohlizeni anket</h2>
            <p>Dodelat</p>
        </Jumbotron>
    </Container>
);

export default Album;
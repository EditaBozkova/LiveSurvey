import React from 'react';
import { Container, Form, Jumbotron } from 'react-bootstrap';
import NavBa from './NavBar';

const Podmenu = () => {
    return (
        <Form inline>
                <Form.Label className="mb-2 mr-sm-2" htmlFor="inlineFormCustomSelectPref">
                    Název dotazníku</Form.Label>
                <Form.Control 
                placeholder="Název"
                type="text"
                name="SName"
                className="mb-2 mr-sm-2"
                required />

                <Form.Label className="mb-2 mr-sm-2" htmlFor="inlineFormCustomSelectPref">
                    Autor dotazníku</Form.Label>
                <Form.Control 
                placeholder="Autor"
                type="text"
                name="SAuthor"
                className="mb-2 mr-sm-2" 
                required />

                <input 
                type="submit"
                value="Odeslat"
                name="submit" />
        </Form>
    )
}

const CreateS = () => (
    <Container className="p-1">
        <NavBa></NavBa>
        <Jumbotron>
            <h2>Vytvořit anketu</h2>
            <p>Nástroj pro tvorbu interaktvních anket se sběrem dat</p>
        </Jumbotron>
        <Podmenu />
    </Container>
);

export default CreateS;
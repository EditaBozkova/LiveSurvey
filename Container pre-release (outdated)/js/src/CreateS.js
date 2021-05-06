import React from 'react';
import { Container, Form, Jumbotron, Button } from 'react-bootstrap';
import NavBa from './NavBar';

const Podmenu = () => {
    return (
        <Form inline>
                <Form.Label className="mb-2 mr-sm-2" htmlFor="inlineFormCustomSelectPref">
                    Název dotazníku</Form.Label>
                <Form.Control 
                placeholder="Název"
                id="SurveyName"
                className="mb-2 mr-sm-2" />
                <Form.Label className="mb-2 mr-sm-2" htmlFor="inlineFormCustomSelectPref">
                    Autor dotazníku</Form.Label>
                <Form.Control 
                placeholder="Autor"
                id="SurveyAuthor"
                className="mb-2 mr-sm-2" />
                <Button href='/InProgress' variant="primary" className="mb-2 mr-sm-2">Zahájit tvorbu</Button>
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
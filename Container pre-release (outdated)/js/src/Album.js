import React from 'react';
import NavBa from './NavBar';
import { Card, CardColumns, Container, Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';

const Podmenu = () => {
    return (
        <CardColumns>
        <Card>
            <Card.Body>
                <Card.Title><h3>Průzkum spokojenosti</h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Autor: ATX.ui</Card.Subtitle>
                <Card.Text>
                    Tento dotazník slouží pro sběr referncí firmy ATX.ui
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Počet otázek: 12</ListGroupItem>
                <ListGroupItem><b>Doba:</b> 10 minut</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href=""><b>Spustit</b></Card.Link>
                <Card.Link href="">Smazat</Card.Link>
            </Card.Body>
        </Card>

        <Card>
            <Card.Body>
                <Card.Title><h3>Dotazník k diplomové práci</h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Autor: čet. Jitka Volná</Card.Subtitle>
                <Card.Text>
                    Dotazník zaměřený pro studenty 1. a 2. ročníků UO na téma Alkohol a drogy. Data slouží k vypracování diplomové práci.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Počet otázek: 15</ListGroupItem>
                <ListGroupItem><b>Doba:</b> 10 minut</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href=""><b>Spustit</b></Card.Link>
                <Card.Link href="">Smazat</Card.Link>
            </Card.Body>
        </Card>

        <Card>
            <Card.Body>
                <Card.Title><h3>Školní dotazník</h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Autor: Ing. Filip Hrubý</Card.Subtitle>
                <Card.Text>
                    Tento dotazník slouží pro přezkoušení studentů z předmětu Projektový management
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Počet otázek: 15</ListGroupItem>
                <ListGroupItem><b>Doba:</b> 10 minut</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href=""><b>Spustit</b></Card.Link>
                <Card.Link href="">Smazat</Card.Link>
            </Card.Body>
        </Card>

        <Card>
            <Card.Body>
                <Card.Title><h3>Dotazník Lorem ipsum</h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Autor: generátor</Card.Subtitle>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla non arcu lacinia neque faucibus fringilla. Etiam bibendum elit eget erat.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Počet otázek: 35</ListGroupItem>
                <ListGroupItem><b>Doba:</b> 20 minut</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href=""><b>Spustit</b></Card.Link>
                <Card.Link href="">Smazat</Card.Link>
            </Card.Body>
        </Card>

        </CardColumns>
    )
}

const Album = () => (
    <Container className="p-1">
        <NavBa></NavBa>
        <Jumbotron>
            <h2>Prohlížení zveřejněných anket</h2><br></br>
            <p>Níže vyberte požadovanou anketu, kterou zahájíte příslušným tlačítkem</p>
        </Jumbotron>
        <Podmenu></Podmenu>
    </Container>
);

export default Album;
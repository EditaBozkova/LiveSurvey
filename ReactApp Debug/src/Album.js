import React from 'react';
import NavBa from './NavBar';
import { Card, CardColumns, Container, Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';

const Survey = (props) => {
    let url="/album-"+props.index;

    return (
        <Card>
            <Card.Body>
                <Card.Title><h3>{props.data.info.SName ? props.data.info.SName : "defName"}</h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Autor: {props.data.info.SAuthor ? props.data.info.SAuthor : "defAuth"}</Card.Subtitle>
                <Card.Text>
                    {props.data.info.SAbout ? props.data.info.SAbout : "defAbout"}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Počet otázek: {props.data.questions.lenght ? props.data.questions.lenght : "0"}</ListGroupItem>
                <ListGroupItem><b>Doba:</b> {props.data.info.STime ? props.data.info.STime : "0 minut"}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href={url}><b>Spustit</b></Card.Link>
                <Card.Link href="">Smazat</Card.Link>
            </Card.Body>
        </Card>
    )
}

const Podmenu = (props) => {
    const Result=[]
    //console.log(JSON.stringify(props.JSONdata));

    for(const item of props.JSONdata) {
        const index=props.JSONdata.indexOf(item);

        Result.push(<Survey data={item} index={index}></Survey>);
    }
    return (
        <CardColumns>{Result}</CardColumns>
    )
}

const Album = (props) => (
    <Container className="p-1">
        <NavBa></NavBa>
        <Jumbotron>
            <h2>Prohlížení zveřejněných anket</h2><br></br>
            <p>Níže vyberte požadovanou anketu, kterou zahájíte příslušným tlačítkem</p>
        </Jumbotron>
        <Podmenu JSONdata={props.JSONdata}/>
    </Container>
)

export default Album;
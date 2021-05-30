import React from 'react';
import NavBa from './NavBar';
import {NavLink } from 'react-router-dom';
import { Card, CardColumns, Container, Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';

const Survey = (props) => {
    let url="/album/"+props.index;

    const data = props.data;
    const {info,questions}=data;

    return (
        <Card>
            <Card.Body>
                <Card.Title><h3>{info.SName ? info.SName : "defName"}</h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Autor: {info.SAuthor ? info.SAuthor : "defAuth"}</Card.Subtitle>
                <Card.Text>
                    {info.SAbout ? info.SAbout : "defAbout"}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Počet otázek: {questions.length ? questions.length : "0"}</ListGroupItem>
                <ListGroupItem><b>Doba:</b> {info.STime ? info.STime : "0 minut"}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <NavLink to={url}><b>Spustit</b> </NavLink>
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
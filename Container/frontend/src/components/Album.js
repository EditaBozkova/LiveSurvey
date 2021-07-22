// Import používaných knihoven
import React from 'react';
import NavBar from './NavBar';

// Import používaných komponent
import {NavLink } from 'react-router-dom';
import { Card, CardColumns, Container, Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';

// Komponenta jednotlivé karty
const Survey = (props) => {
    const {info,questions}=props.data; // Rozdělení ankety na dvě části - info a questions

    let url="./album/"+props.index+"/"+info.ID; // Vytvoření URL adresy pro přesměrování na konkrétní adresu

    // Návrat jedné dynamicky vytvořené karty
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
                <NavLink to={url}><b>Spustit</b> </NavLink> {/*Přesměrování na konkrétní anketu*/}
                <Card.Link href="">Smazat</Card.Link> {/*in progress...*/}
            </Card.Body>
        </Card>
    )
}

// Komponent pro zobrazení karet s anketami 
const Podmenu = (props) => {
    const Result=[] // Definice pole pro uložení komponent karet

    for(const item of props.JSONdata) { // Cyklus pro projetí všech anket, item obsahuje jednotlivou anketu
        const index=props.JSONdata.indexOf(item); // Ukládáme index ankety

        Result.push(<Survey data={item} index={index} key={index} />); // Do pole si vložíme novou komponentu Survey (obsahuje kartu)
    }
    return (
        <CardColumns>{Result}</CardColumns>
    )
}

// Komponent pro zobrazení stránky
const Album = (props) => (
    <Container className="p-1">
        <NavBar />
        <Jumbotron>
            <h2>Prohlížení zveřejněných anket</h2><br></br>
            <p>Níže vyberte požadovanou anketu, kterou zahájíte příslušným tlačítkem</p>
        </Jumbotron>
        <Podmenu JSONdata={props.JSONdata}/>
    </Container>
)

export default Album;
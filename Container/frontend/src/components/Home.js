// Import používaných knihoven
import React from 'react';

// Import používaných komponent z React-bootstrap
import { Container, Jumbotron, Card, CardGroup, Button, Badge } from 'react-bootstrap';
import NavBar from './NavBar';

// Komponentra pro zobrazení karet
const Podmenu = (props) => {
  return (
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title><b>Základní info</b></Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla non arcu lacinia neque faucibus fringilla. Etiam bibendum elit eget erat.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated: {props.LastUp ? props.LastUp : "100 BC"}</small> {/*Zobrazení poslední úpravy (pokud je proměnná prázdná, zobrazí se defaultní hodnota*/}
        </Card.Footer>
      </Card>

      <Card>
        <Card.Header>Vytvořit anketu</Card.Header>
        <Card.Body>
          <Card.Text>
            TLorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla non arcu.
          </Card.Text>
        </Card.Body>
        <Button href="./create" variant="primary">Vytvořit</Button>{' '} {/*Tlačítko pro tvorbu nové ankety (primary = modrá barva tlačítka)*/}
      </Card>

      <Card>
        <Card.Header>Veřejné ankety</Card.Header>
        <Card.Body>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla non arcu to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Button href='./album' variant="secondary">Prohlédnout <Badge variant="light">{props.SurveySum ? props.SurveySum : "0"}</Badge> {/*Tlačítko pro prohlížení anket (secondary = šedá barva tlačítka), počet vytvořených anket*/}
        </Button>{' '}
      </Card>
    </CardGroup>
  );
};

// Komponenta pro zobrazení domovské stránky
const Home = (props) => (
  <Container className="p-1">
    <NavBar /> {/*Komponenta pro horní lištu (navigation bar)*/}
    <Jumbotron>
      <Container>
        <h1>Živé ankety</h1>
        <p>
        Vítejte na <i>jedinečné</i> webové aplikaci, která Vám pomůže vytvořit a následně sdílet živé ankety!
        </p>
        <ul>
          <li>Výběr jedné z možnosti</li>
          <li>Výběr všech hodnot, které platí </li>
          <li>Volná odpověď </li>
        </ul>
     </Container>
    </Jumbotron>
    <Podmenu SurveySum={props.SurSum}/> {/*Spuštění komponenty Podmenu*/}
  </Container>
);

export default Home;
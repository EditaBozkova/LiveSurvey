import React from 'react';
import NavBa from './NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron, Card, CardGroup, Button, Badge } from 'react-bootstrap';

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
      <small className="text-muted">Last updated: {props.LastUp ? props.LastUp : "100 BC"}</small>
    </Card.Footer>
  </Card>

  <Card>
  <Card.Header>Vytvořit anketu</Card.Header>
    <Card.Body>
      <Card.Text>
        TLorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla non arcu.
      </Card.Text>
    </Card.Body>
    <Button href="/create" variant="primary">Vytvořit</Button>{' '}
  </Card>

  <Card>
  <Card.Header>Veřejné ankety</Card.Header>
    <Card.Body>
      <Card.Text>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla non arcu to show that equal height action.
      </Card.Text>
    </Card.Body>
    <Button href='/album' variant="secondary">Prohlédnout <Badge variant="light">{props.SurveySum ? props.SurveySum : "0"}</Badge>
    </Button>{' '}
  </Card>
</CardGroup>
  );
};

const Home = (props) => (
  <Container className="p-1">
    <NavBa></NavBa>
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
    <Podmenu SurveySum={props.SurSum}/>
  </Container>
);

export default Home;
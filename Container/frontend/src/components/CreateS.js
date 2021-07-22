import React from 'react';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Jumbotron } from 'react-bootstrap';
import NavBa from './NavBar';

const Podmenu = () => {
    const [nazev, setNazev] = useState("Dotazník pro studenty KB");
    const [autor, setAutor] = useState("Jan Schwarz");
    const history = useHistory();

    const handleSubmit = (props) => {
        props.preventDefault();
        const dotaznik = {nazev, autor};

        fetch("/api/createH/", {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=UTF-8", // indikace obsahu
            },
            body: JSON.stringify(dotaznik),
          }).then(() => {
            console.log("Zaklad dotazniku pridan");
            history.push("/");
          });
    };


    return (
        <div className="create">
            <h2><b>Tvorba dotazníku</b></h2><br />

            <form onSubmit={handleSubmit} action="/ui/">
                <label>Název dotazníku: </label><br />
                <input
                 type="text"
                 required
                 placeholder={nazev}
                 onChange={(props) => setNazev(props.target.value)}
                /><br /><br />
                <label>Autor: </label><br />
                <input
                 type="text"
                 required
                 placeholder={autor}
                 onChange={(props) => setAutor(props.target.value)}
                /><br /><br />
                <input 
                 type="submit"
                 value="Odeslat"
                 name="submit" />
            </form>
        </div>
        

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
// Import používaných knihoven
import React from 'react';

// Import používaných komponent/funkcí
import { useState } from "react";
import { Container, Jumbotron } from 'react-bootstrap';
import NavBar from './NavBar';

// Spuštění komponenty pro zobrazení podmenu
const Podmenu = () => {
    // promenne pro odeslani na server
    const [nazev, setNazev] = useState("Dotazník pro studenty KB");
    const [autor, setAutor] = useState("Jan Schwarz");

    // funkce pro spracovani dat pri zmacknuti "submit"
    const handleSubmit = (props) => {
        props.preventDefault();
        const dotaznik = {nazev, autor};    // ulozeni promenych do jedne

        fetch("/api/createH/", {    // odeslani dat (kam)
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=UTF-8",    // indikace obsahu
            },
            body: JSON.stringify(dotaznik),
          }).then(() => {
            console.log("Zaklad dotazniku pridan");
          });
    };

    // Návratová hodnota komponenty
    return (
        <div className="create">
            <h2><b>Tvorba dotazníku</b></h2><br />

            <form onSubmit={handleSubmit} action="/ui/"> {/*Zapouzdření všech inputů do jednoho formuláře (textový input a tlačítko submit)*/}
                <label>Název dotazníku: </label><br />
                <input
                 type="text"
                 required
                 placeholder={nazev}
                 onChange={(props) => setNazev(props.target.value)} // pri zmene obsahu -> poslat data do setNazev
                /><br /><br />
                <label>Autor: </label><br />
                <input
                 type="text"
                 required
                 placeholder={autor}
                 onChange={(props) => setAutor(props.target.value)} // pri zmene obsahu -> poslat data do setAutor
                /><br /><br />
                <input // Tlačítko pro odeslání dat
                 type="submit"
                 value="Odeslat"
                 name="submit" />
            </form>
        </div>
    )
}

// Spuštění komponnety pro zorazení stránky
const CreateS = () => (
    <Container className="p-1">
        <NavBar />
        <Jumbotron>
            <h2>Vytvořit anketu</h2>
            <p>Nástroj pro tvorbu interaktvních anket se sběrem dat</p>
        </Jumbotron>
        <Podmenu />
    </Container>
);

export default CreateS;
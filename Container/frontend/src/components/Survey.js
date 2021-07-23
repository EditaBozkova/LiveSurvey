import React from 'react';

import NavBar from './NavBar';
import Question from './Question';
import { Container, Jumbotron} from 'react-bootstrap';
import { useState } from "react";

const Otazky = (props) => {
    // promenne pro odeslani na server
    const [odpovedi, setOdpovedi] = useState({});
    const Result=[]

    // funkce pro spracovani dat pri zmacknuti "submit"
    const handleSubmit = (prop) => {
        prop.preventDefault();

        let url="/api/sendAnsw/"//+props.nameID;
        fetch(url, {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=UTF-8", // indikace obsahu
            },
            body: JSON.stringify(odpovedi),
          }).then(() => {
            console.log("Vyplneny dotaznik odeslan");
          });
    };

    // funkce pro pridani nove odpovedi do predchozich odpovedi
    const onChange = (ID, data) => {
        setOdpovedi(odpovedi => ({
            ...odpovedi,
            [ID]:data
        }))
    };

    const ValueByID = (ID) => {
        return (odpovedi[ID])
    }

    // Cyklus pro vložení jednotlivých otázek do dynamického pole Result
    for(const item of props.JSONdata) { // JSONdata obsahuje otázky kontrétní ankety, item obsahuje data konkrétní otázky
        const index=props.JSONdata.indexOf(item); 

        // Do pole vkládáme jednotlivé karty s otázkou
        Result.push(<Question data={item} index={index} onChange={onChange} ID={item.ID} value={ValueByID(item.ID)} key={index}/>);
        Result.push(<br key={'b'+index} />);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}> {/*Zobrazení všech otázek v jednom form*/}
                {Result}
                <a href="/iu/"><input 
                  type="submit"
                  value="Odeslat"
                  name="submit" /></a>
            </form>
        </div>
    )
}

// Komponenta pro zobrazení webové stránky s vyplněním odpovědí pro konkrétní dotazník
const Survey = (props) => { 
    return (
        <Container className="p-1">
            <NavBar />
            <Jumbotron>
                <h1>Vítejte u dotazníku "{props.JSONdata[props.ID].info.SName}"</h1>
            </Jumbotron>
            <Otazky JSONdata={props.JSONdata[props.ID].questions} nameID={props.nameID} /> {/*Dynamicky tvořené otázky*/}

        </Container>
    )
}

export default Survey;
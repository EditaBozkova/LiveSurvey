import React from 'react';
import NavBa from './NavBar';
import Question from './Question';
import { Container, Jumbotron} from 'react-bootstrap';
import { useState } from "react";

const Otazky = (props) => {
    const [odpovedi, setOdpovedi] = useState({});
    const Result=[]

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

    const onChange = (ID, data) => {
        setOdpovedi(odpovedi => ({
            ...odpovedi,
            [ID]:data
        }))
    };

    const ValueByID = (ID) => {
        return (odpovedi[ID])
    }

    for(const item of props.JSONdata) {
        const index=props.JSONdata.indexOf(item);

        Result.push(<Question data={item} index={index} onChange={onChange} ID={item.ID} value={ValueByID(item.ID)} key={index}/>);
        Result.push(<br key={'b'+index} />);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {Result}
                <a href="/iu/"><input 
                  type="submit"
                  value="Odeslat"
                  name="submit" /></a>
            </form>
        </div>
    )
}

const Survey = (props) => { 
    return (
        <Container className="p-1">
            <NavBa />
            <Jumbotron>
                <h1>Vítejte u dotazníku "{props.JSONdata[props.ID].info.SName}"</h1>
            </Jumbotron>
            <Otazky JSONdata={props.JSONdata[props.ID].questions} nameID={props.nameID} />

        </Container>
    )
}

export default Survey;
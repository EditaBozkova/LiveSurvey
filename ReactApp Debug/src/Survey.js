import React from 'react';
import NavBa from './NavBar';
import Question from './Question';
import { Container, Jumbotron, Button} from 'react-bootstrap';

const Otazky = (props) => {
    const Result=[]
    //console.log(JSON.stringify(props.JSONdata));

    for(const item of props.JSONdata) {
        const index=props.JSONdata.indexOf(item);

        Result.push(<Question data={item} index={index} />);
        Result.push(<br />);
    }
    return (
        <div>{Result}</div>
    )
}

const Survey = (props) => { 
    let url="/album/"+props.ID+'/0';
    return (
        <Container className="p-1">
            <NavBa />
            <Jumbotron>
                <h1>Vítejte u dotazníku "{props.JSONdata[props.ID].info.SName}"</h1>
            </Jumbotron>
            <Otazky JSONdata={props.JSONdata[props.ID].questions} />
            <Button 
            className="float-right" 
            size="lg"
            type="submit">
            Odeslat</Button>
            <br /><br />
        </Container>
    )
}

export default Survey;
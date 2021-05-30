import React from 'react';
import { Card} from 'react-bootstrap';

const Type = (props) => {
    if(props.Type === 'radiogroup') {
        return (
            <div>text jednavolba</div>
        )
    }
    else if (props.Type === 'text') {
        return (
            <div>text volny</div>
        )
    }
    else if (props.Type === 'checkbox') {
        return (
            <div>text vicevolba</div>
        )
    }
    else {
        return (
            <div>NULL</div>
        )
    }
}

const Question = (props) => {
    //const data = props.JSONdata[props.ID].questions;

    return (
        <Card>
            <Card.Header><h4>{props.data.QTitle}</h4>  Otázka č.{props.index}</Card.Header>
            <Card.Body>
                <Card.Text><Type Type={props.data.Type} /></Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Question;
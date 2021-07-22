import React from 'react';
import { Card} from 'react-bootstrap';

const Type = (props) => {
    if(props.Type === 'radio') {
        return (
            <RadioOdpoved {...props} />
        )
    }
    else if (props.Type === 'text') {
        return (
            <TextOdpoved {...props} />
        )
    }
    else if (props.Type === 'checkbox') {
        return (
            <CheckOdpoved {...props} />
        )
    }
    else {
        return (
            <div>NULL</div>
        )
    }
}

const TextOdpoved = (props) => {
    const onChange = (event) => {
        props.onChange(props.ID, event.target.value)
    }
    return (
        <input
         type="text"
         id={props.ID}
         placeholder="Odpověď"
         value={props.value}
         onChange={onChange}
         required
        />
    )
}

const RadioOdpoved = (props) => {
    const Result=[]

    const onChange = (event) => {
        props.onChange(props.ID, event.target.value)
    }

    for(const item of props.Otazky) {
        const index=props.Otazky.indexOf(item);
        
        Result.push(
            <div className="form-check" key={"d" + index}>
                <input 
                 className="form-check-input" 
                 type={props.Type}
                 value={item} 
                 onChange={onChange} 
                 name={props.ID} 
                 required
                 key={index}/>
                <label className="form-check-label" key={"l" + index}>{item}</label>
            </div>)
    }
    return (
        <fieldset className="form-group" id={props.ID}>{Result}</fieldset>
    )
}

const CheckOdpoved = (props) => {
    const Result=[]

    const onChange = (event) => {
        props.onChange(props.ID, event.target.value)
    }

    for(const item of props.Otazky) {
        const index=props.Otazky.indexOf(item);
        Result.push(
            <div className="form-check" key={"d" + index}>
                <input 
                 className="form-check-input" 
                 type={props.Type}
                 value={item} 
                 onChange={onChange} 
                 name={props.ID} 
                 key={index}/>
                <label className="form-check-label" key={"l" + index}>{item}</label>
            </div>)
    }
    return (
        <fieldset className="form-group" id={props.ID}>{Result}</fieldset>
    )
}

const Question = (props) => {
    return (
        <Card>
            <Card.Header><h4>{props.data.QTitle}</h4>  Otázka č. {props.index + 1}</Card.Header>
            <Card.Body>
                <Card.Text><Type Type={props.data.Type} Otazky={props.data.Choices} ID={props.data.ID} onChange={props.onChange}/></Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Question;
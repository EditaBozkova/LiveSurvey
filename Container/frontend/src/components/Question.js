import React from 'react';
import { Card} from 'react-bootstrap';

// switch pro zobrazeni komponenty podle typu otazky
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
    else { // v pripade, ze se neco pokazi
        return (
            <div>NULL</div>
        )
    }
}

// otazka s textovou odpovedi
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

// otazka s vyberem jedne odpovedi
const RadioOdpoved = (props) => {
    // pole pro jednotlive inputy
    const Result=[]

    // v pripade zakliknuti volby
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

// otazka s vyberem vice odpovedi (vytvoreno po 2. z duvodu odlisnosti od radio - checkbox neni ani jeden required, jinak stejne)
const CheckOdpoved = (props) => {
    // pole pro jednotlive inputy
    const Result=[]

    // v pripade zakliknuti volby
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
import React from 'react';
import {createArrayUnsignedInt} from "../Utils/Utils"





const SelectHeure = (props) => {

    const handleChangeHeure = (event) => {
        console.log("handleChangeHeure : " + event.target.value);
        props.setHeure(event.target.value);
    }
    
    const handleChangeMinute = (event) => {
        console.log("handleChangeMinute : " + event.target.value);
        props.setMinute(event.target.value);
    }

    const hours = createArrayUnsignedInt(24);
    const listOptionsHour = hours.map((number) =>
        <option value={number}>{number}</option>
    );
    const minutes = createArrayUnsignedInt(60);
    const listOptionsMinutes = minutes.map((number) =>
        <option value={number}>{number}</option>
    );

    return(
        <div>
            <p>Heure de l'alarme?</p>
            <select name="heure" id="heure-select" onChange={handleChangeHeure}>
                {listOptionsHour}
            </select>
            <span> : </span>
            <select name="minute" id="minute-select" onChange={handleChangeMinute}>
                {listOptionsMinutes}
            </select>
        </div>
    )
}

export default(SelectHeure);
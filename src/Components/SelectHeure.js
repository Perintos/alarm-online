import React from 'react';
import {createArrayUnsignedInt} from "../Utils/Utils"


const hours = createArrayUnsignedInt(24);
const listOptionsHour = hours.map((number) =>
    <option value={number}>{number}</option>
);
const minutes = createArrayUnsignedInt(60);
const listOptionsMinutes = minutes.map((number) =>
    <option value={number}>{number}</option>
);


const SelectHeure = () => {
    return(
        <div>
            <select name="heure" id="heure-select">
                {listOptionsHour}
            </select>
            <span> : </span>
            <select name="heure" id="heure-select">
                {listOptionsMinutes}
            </select>
        </div>
    )
}

export default(SelectHeure);
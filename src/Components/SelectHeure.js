import React from 'react';
import Select from "@material-ui/core/Select";

import {createArrayUnsignedInt} from "../Utils/Utils"
import { withTheme } from '@material-ui/core';

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
        <div class="margin-x-small">
            <div>
                <p>Heure de l'alarme?</p>
            </div>
            <div>
                <Select  
                    native
                    onChange={handleChangeHeure}
                    inputProps={{
                        name: "heure",
                        id: "heure-native-simple"
                    }}
                >
                    {listOptionsHour}
                </Select>
                <span> : </span>
                <Select
                    native
                    onChange={handleChangeMinute}
                    inputProps={{
                        name: "minute",
                        id: "minute-native-simple"
                    }}
                >
                    {listOptionsMinutes}
                </Select>
            </div>
        </div>
    )
}

export default(SelectHeure);
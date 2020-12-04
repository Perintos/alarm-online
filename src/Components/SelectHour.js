import React from 'react';
import Select from "@material-ui/core/Select";
import {createArrayUnsignedInt} from "../Utils/Utils"

const SelectHour = ({setHour,setMinute}) => {

    const handleChangeHours = (event) => {
        console.log("handleChangeHours : " + event.target.value);
        setHour(event.target.value);
    }
    
    const hanfleChangeMinute = (event) => {
        console.log("hanfleChangeMinute : " + event.target.value);
        setMinute(event.target.value);
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
                    onChange={handleChangeHours}
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
                    onChange={hanfleChangeMinute}
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

export default(SelectHour);
import React from 'react';
import Select from "@material-ui/core/Select";
import {createArrayUnsignedInt} from "../Utils/Utils"
import Grid from '@material-ui/core/Grid';


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
        <div>
            <Grid container direction="column" justify="center" alignItems="center" >
                <Grid item xs={12}><p>Heure de l'alarme?</p></Grid>
                <Grid item xs={12}> 
                    <Select  
                        native
                        onChange={handleChangeHours}
                        inputProps={{
                            name: "heure",
                            id: "heure-native-simple"
                        }}>
                        {listOptionsHour}
                    </Select>
                    <span> : </span>
                    <Select
                        native
                        onChange={hanfleChangeMinute}
                        inputProps={{
                            name: "minute",
                            id: "minute-native-simple"
                        }}>
                        {listOptionsMinutes}
                    </Select>
                </Grid>
            </Grid>
        </div>
    )
}

export default(SelectHour);
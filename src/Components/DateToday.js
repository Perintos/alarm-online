import React from 'react';
import {afficherJourEnLettre, afficherMoisEnLettre} from "../Utils/Date"


const DateToday = (props) => {
    return(
        <div>{afficherJourEnLettre(props.date)} {props.date.getDate()} {afficherMoisEnLettre(props.date)} {props.date.getFullYear()}</div>
    )
}

export default(DateToday);
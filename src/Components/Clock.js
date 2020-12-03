import React, {useState, useEffect} from 'react';


const Clock = (props) => {
    return(
        <div class="horloge">
            {props.date.toLocaleTimeString()}
        </div>
    )
}

export default(Clock);
import React from 'react';
import {calculateTimeRemaining} from "../Utils/Date"

const Timer = ({heure, minute}) => {
    return(
        <div class=".margin-x-small">
            <p class="timer">{calculateTimeRemaining(heure, minute)}</p>
        </div>
    )
}

export default(Timer);
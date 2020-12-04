import React from 'react';
import {calculateTimeRemaining} from "../Utils/Date"

const Timer = ({timesUp, hour, minute}) => {
    return(
        <div class=".margin-x-small">
            <p class="timer">{timesUp ? "C'est l'heure !" : calculateTimeRemaining(hour, minute)}</p>
        </div>
    )
}

export default(Timer);
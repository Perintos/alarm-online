import React from 'react';


const Clock = ({date}) => {
    return(
        <div class="horloge">
            {date.toLocaleTimeString()}
        </div>
    )
}

export default(Clock);
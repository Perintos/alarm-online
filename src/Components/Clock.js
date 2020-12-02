import React, {useState, useEffect} from 'react';


const Clock = (props) => {
    return(
        <div>{props.date.toLocaleTimeString()}</div>
    )
}

export default(Clock);
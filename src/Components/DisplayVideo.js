import React from 'react';


const DisplayVideo = (props) => {

    return(
        <div>
            <iframe width="560" height="315" src={props.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>


    )
}

export default(DisplayVideo);
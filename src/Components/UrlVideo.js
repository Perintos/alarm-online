import React, { useState } from 'react';



const UrlVideo = (props) => {

    return(
        <div>
            <input type="url" id="url-video" name="url-video" onChange={props.handleChange}/>
        </div>
    )
}

export default(UrlVideo);
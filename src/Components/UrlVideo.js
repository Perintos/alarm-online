import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const UrlVideo = (props) => {

    return(
        <div class="margin-x-small">
            <input type="text" id="standard-basic" name="url-video" label="url de la vidéo" onChange={props.handleChange}/>
        </div>
    )
}

export default(UrlVideo);
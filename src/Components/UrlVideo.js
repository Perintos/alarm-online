import React from 'react';

const UrlVideo = ({onUrlChange}) => {

    return(
        <div class="margin-x-small">
            <input type="text" id="standard-basic" name="url-video" label="url de la vidéo" onChange={onUrlChange}/>
        </div>
    )
}

export default(UrlVideo);
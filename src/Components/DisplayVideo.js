import React from 'react';
import YouTube from 'react-youtube';

const DisplayVideo = (props) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: props.play,
        },
    };


    return(
        <div>  
            <YouTube 
                videoId={props.url}
                opts={opts} 
                />
        </div>
    )
}

export default(DisplayVideo);
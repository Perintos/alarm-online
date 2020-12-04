import React from 'react';
import YouTube from 'react-youtube';

const DisplayVideo = ({play,url}) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: play,
        },
    };


    return(
        <div class="margin-x-small">  
            <YouTube
                id="video-youtube" 
                videoId={url}
                opts={opts} 
                />
        </div>
    )
}

export default(DisplayVideo);
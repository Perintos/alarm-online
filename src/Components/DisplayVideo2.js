import React, {Component} from 'react';
import YouTube from 'react-youtube';

class DisplayVideo2 extends Component{
    

    videoOnReady(event) {
        // access to player in all event handlers via event.target
        console.log("videoOnReady");
    }

    videoOnPlay(event){
        console.log("videoOnplay : " + event.target.getCurrentTime());
    }

    videoStateChange(event){
        console.log("videoStateChange : " + event);
    }

    render() {
        const opts = {
          height: '390',
          width: '640',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
          },
        };
        
        const {url} = this.props

        return (
            <YouTube 
                videoId={url} 
                opts={opts} 
                onReady={this.videoOnReady} 
                onPlay={this.videoOnPlay}
                onStateChange={this.videoStateChange}
            />
        )
    }
}


export default(DisplayVideo2);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
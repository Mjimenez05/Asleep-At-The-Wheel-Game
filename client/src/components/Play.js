import React, { setState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import ReactHowler from 'react-howler'
import Music from '../audio/audio.mp3'


export default function Play(isPlayingMusic) {

    var isPlaying = false
    console.log(isPlaying);
    

    // playPause = () => {
    //     if (isPlaying === false){
    //         isPlaying = true
    //     }
    //     else{
    //         isPlaying = false
    //     }
    // }

    return (
        <div>
            <ReactHowler src={Music} playing={isPlaying} loop={true} />
            <div className="play-pause"  >
                <FontAwesomeIcon className="text-light" icon={faPlayCircle} /> 
                
            </div>
        </div>
    )
}
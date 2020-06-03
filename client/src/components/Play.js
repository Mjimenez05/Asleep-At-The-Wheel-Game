import React, { setState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import ReactHowler from 'react-howler'
import Music from '../audio/audio.mp3'


export default function Play(isPlayingMusic) {

    var isPlaying = true
    
    

 

    return (
        <div>
            <ReactHowler src={Music} playing={isPlaying} loop={true} />
            <a className="play-pause" >
                <FontAwesomeIcon className="text-light" icon={faPlayCircle} /> 
                
            </a>
        </div>
    )
}
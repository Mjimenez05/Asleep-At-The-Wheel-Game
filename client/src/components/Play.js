import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

var play = true

// playPause = () => {
  
// }

export default function Play() {
    return (
        <div classname="play">
            <FontAwesomeIcon
                className="text-light"
                icon={faPlay} />
        </div>
    )
}
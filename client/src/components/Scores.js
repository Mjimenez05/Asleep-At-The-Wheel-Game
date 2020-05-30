import React, { useState, useEffect } from 'react'
import axios from "axios"


export default function Scores(props) {

    const [scores, updateScores] = useState([])
    
    if (props.reloadScores) {
        console.log(props);
        axios
            .get(
                "saved"
            )
            .then(function (response) {

                updateScores(response.data)
            })
            .catch(
                console.log
            )
        }
        props.updateReloadScores(false)


    return (
        <div className="highScores text-light text-center">
            <h6>HIGH SCORES</h6>
            <ul className="list-group">
                {scores.map(function (score) {
                    return (

                        <li className="list-group-item">{score.initals}: {score.score}</li>

                    )
                })}
            </ul>
        </div>
    )
}

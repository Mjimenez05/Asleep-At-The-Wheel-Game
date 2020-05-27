import React from 'react'
import axios from 'axios'
import { save } from '../record'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'



export default function Menu({ score, onPlay, onReplay, onReverse }) {


	return (
		<div className="menu c-wrap">
			<ul className="c-inner">
				<li>score: {score}</li>
				{onReplay &&
					<li>
						<div className="input-group"><input type="text" className="form-control" placeholder="Enter Initals" maxlength="3" aria-label="Recipient's username" aria-describedby="button-addon2" />
							<div className="input-group-append">
								<button className="btn btn-outline-secondary" type="button" id="button-addon2"><FontAwesomeIcon className="text-light"icon={faSave} /></button>
							</div>
							</div>
							
					</li>
				}
				<li>
					<div className="btn font-weight-bolder text-light button" onMouseDown={onPlay} onTouchStart={onPlay}>play</div>
				</li>
				{onReplay &&
							<li>
								<div className="btn font-weight-bolder text-light button" onMouseDown={onReplay} onTouchStart={onReplay}>replay</div>
							</li>
						}
						{onReplay &&
							<li>
								<div className="btn font-weight-bolder text-light button" onMouseDown={onReverse} onTouchStart={onReverse}>reverse</div>
							</li>
						}
			</ul>
		</div>
	)
}
import React from 'react'
import axios from 'axios'
import { save } from '../record'

	

export default function Menu({ score, onPlay, onReplay, onReverse }) {

	// saveScore = () => {
	// 	axios({
	// 		method: "post",
	// 		url: "/saveScore",
	// 		data: {score}
	// 	})
	// 	.then(
	// 		console.log
	// 	)
	// 	.catch(
	// 		console.log
	// 	)
	// }

	return (
		<div className="menu c-wrap">
			<ul className="c-inner">
				<li>score: {score}</li>
				<li>
					<div className="btn" onMouseDown={onPlay} onTouchStart={onPlay}>play</div>
				</li>
				{/* { onReplay && 
					<li>
						<div className="btn" onMouseDown={this.saveScore} onTouchStart={this.saveScore}>save score</div>
					</li>
				} */}
				{ onReplay && 
					<li>
						<div className="btn" onMouseDown={onReplay} onTouchStart={onReplay}>replay</div>
					</li>
				}
				{ onReplay && 
					<li>
						<div className="btn" onMouseDown={onReverse} onTouchStart={onReverse}>reverse</div>
					</li>
				}
			</ul>
		</div>
	)
}
import React, { Component } from 'react'
import axios from 'axios'
import { save } from '../record'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'


export default class Menu extends Component {

	state = {
		initals: '',
		score: ''
	}

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });

	}

	handleSubmit = (event) => {
		event.preventDefault();

		axios()
	}

	saveScore = (state) => {
		console.log("save score", state);
		
		axios({
		  method: "post",
		  url: "/saveScore",
		  data: state
		  
		})
		  .then(
			console.log
		  )
		  .catch(
			console.log
		  )
	  }

	render() {
		const { score, onPlay, onReplay, onReverse } = this.props
		this.state.score = score
		console.log(this.state);
		console.log();
		console.log(this.state);
		
		
		return (
			<div className="menu c-wrap">
				<ul className="c-inner">
					<li>score: {score}</li>
					{onReplay &&
						<li>
							<div className="input-group">
								<input
									type="text"
									name="initals"
									className="form-control"
									placeholder="Enter Initals"
									maxlength="3"
									aria-label="initals"
									aria-describedby="save"
									value={this.state.initals}
									onChange={this.handleChange}
								/>
								
								<div className="input-group-append">
									<button
										className="btn btn-outline-secondary"
										type="submit"
										id="save"
										onClick={() => this.saveScore()}
										>
										<FontAwesomeIcon
											className="text-light"
											icon={faSave} />
									</button>
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
}
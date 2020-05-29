import React from 'react'
import classnames from 'classnames'
import Car from './components/Car'
import Piping from './components/Piping'
import Menu from './components/Menu'

export default function App({ state, actions, record }) {
  let { car, pipings, game, player } = state
  let { FLY_UP, START_PLAY } = actions
  let recordState = record.getRecord()
  let { isRecording, history } = recordState
  let isPlaying = game.status === 'playing'
  let onFlyUp = isPlaying && !isRecording && FLY_UP
  let onReplay = history.length > 0 && record.replay
  let landClasses = classnames({
    land: true,
    sliding: isPlaying,
  })
  return (

    <div>
      <div className="highScores text-light text-center">
        <h6>HIGH SCORES</h6>
        <ul className="list-group">
          <li className="list-group-item">ass</li>
          <li className="list-group-item">hey</li>
          <li className="list-group-item">vpd</li>
          <li className="list-group-item">vpd</li>
          <li className="list-group-item">vpd</li>
          <li className="list-group-item">vpd</li>
          <li className="list-group-item">vpd</li>
          <li className="list-group-item">vpd</li>
          <li className="list-group-item">vpd</li>
          <li className="list-group-item">vpd</li>
        </ul>
      </div>
      <div className="game">
        <div className="scene" onMouseDown={onFlyUp} onTouchStart={onFlyUp}>
          {
            pipings.list.map(piping => <Piping key={piping.timestamp} {...piping} />)
          }
          {isPlaying &&
            <div className="score">{player.score}</div>
          }
          <Car {...car} isFlying={isPlaying} />
          <div className={landClasses} />
          {game.status === 'over' &&
            <Menu  score={player.score} onPlay={START_PLAY} onReplay={onReplay} onReverse={record.reverse} />
          }
        </div>
      </div>

    </div>

  )
}
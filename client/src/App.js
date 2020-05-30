import React, { useState } from 'react'
import classnames from 'classnames'
import Car from './components/Car'
import Piping from './components/Piping'
import Menu from './components/Menu'
import Scores from "./components/Scores"


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
  const [reloadScores, updateReloadScores] = useState(true)



  return (

    <div>
      <Scores reloadScores={reloadScores} updateReloadScores={updateReloadScores} />
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
            <Menu updateReloadScores={updateReloadScores} score={player.score} onPlay={START_PLAY} onReplay={onReplay} onReverse={record.reverse} />
          }
        </div>
      </div>

    </div>

  )
}
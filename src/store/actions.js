export let START_PLAY = (state) => {
    let game = {...state.game }
    game.status = 'playing'
    let nextState = {
        ...state,
        ...state.initialState,
        game,
    }
    return FLY_UP(nextState)
}

export let FLY_UP = (state) => {
    if (state.car.height >= state.game.range.max) {
        return state
    }

    let car = {...state.car }
    car.status = 'up'
    car.originalHeight = car.height
    car.targetHeight = car.height + car.flyHeight
    car.timestamp = Date.now()

    let { range } = state.game
    if (car.targetHeight > range.max) {
        car.targetHeight = range.max
    }

    return {
        ...state,
        car,
    }
}

export let PLAYING = (state) => {
    let gameStatus = state.game.status
    if (gameStatus === 'over') {
        return state
    }
    let nextState = flying(state)
    nextState = sliding(nextState)
    nextState = collisitionDetection(nextState)
    return nextState
}


function dropDown(state) {
    let car = {...state.car }
    car.status = 'down'
    car.originalHeight = car.height
    car.targetHeight = state.game.range.min
    car.timestamp = Date.now()
    return {
        ...state,
        car,
    }
}

function flying(state) {
    let car = {...state.car }
    if (car.height === car.targetHeight) {
        return dropDown(state)
    }

    let { timestamp, flyTime, dropTime } = car
    let time = Date.now() - timestamp

    if (car.height < car.targetHeight) {
        let ratio = time / flyTime
        if (ratio > 1) {
            ratio = 1
        }
        car.height = car.originalHeight + (car.targetHeight - car.originalHeight) * ratio
    } else {
        let shift = time * (state.game.range.max - state.game.range.min) / dropTime

        car.height = car.originalHeight - shift
    }

    return {
        ...state,
        car,
    }
}

function sliding(state) {
    let pipings = {...state.pipings }
    let now = Date.now()
    if (now - pipings.timestamp >= pipings.interval) {
        let { game } = state
        let heightRange = game.range.max - game.range.min
        let shift = pipings.range.y.min + (pipings.range.y.max - pipings.range.y.min) * Math.random()
        let piping = {
            timestamp: now,
            x: pipings.range.x.min,
            upper: heightRange - shift - pipings.range.gap,
            below: shift,
            bottom: shift,
            top: shift + pipings.range.gap,
        }
        pipings.list = pipings.list.concat(piping)
        pipings.timestamp = now
    }

    let { car, game } = state
    let collisitionRange = getCollisitionRange(car.size.width, game.size.width, pipings.size.width)
    let player = {...state.player}

    pipings.list = pipings.list.map(piping => {
        piping = {...piping }
        if (piping.x < pipings.range.x.max) {
            let ratio = (now - piping.timestamp) / pipings.speed
            if (ratio > 1) {
                ratio = 1
            }
            piping.x = ratio * pipings.range.x.max
        } else {
            piping.x = pipings.range.x.max
        }

        if (piping.x > collisitionRange.to && !piping.isPassed) {
            piping.isPassed = true
            player.score += 1
        }

        return piping
    }).filter(piping => {
        return piping.x < pipings.range.x.max
    })

    return {
        ...state,
        pipings,
        player,
    }
}

function getCollisitionRange(carWidth, gameWidth, pipingWidth) {
    let from = (gameWidth - carWidth) / 2
    let to = from + carWidth / 2 + pipingWidth
    return { from, to }
}

function collisitionDetection(state) {
    let { game, car, pipings } = state

    let collisitionRange = getCollisitionRange(car.size.width, game.size.width, pipings.size.width)

    let list = pipings.list.filter(piping => {
        return piping.x > collisitionRange.from && piping.x < collisitionRange.to
    })

    let carBottom = car.height
    let carTop = car.height + car.size.height

    for (let i = 0, len = list.length; i < len; i += 1) {
        let piping = list[i]
        if (carBottom < piping.bottom || carTop > piping.top) {
            game = {
                ...game,
                status: 'over'
            }
            return {
                ...state,
                game,
            }
        }
    }
    return state
}
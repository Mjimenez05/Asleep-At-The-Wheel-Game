export default {
    game: {
        status: 'over',
        range: {
            min: 0,
            max: 400,
        },
        size: {
            width: 288,
            height: 512,
        },
    },
    player: {
        score: 0,
    },
    car: {
        size: {
            width: 32,
            height: 32,
        },
        status: 'normal',
        height: 188,
        targetHeight: 188,
        originalHeight: 188,
        flyHeight: 60,
        flyTime: 140,
        dropTime: 1800,
        timestamp: 0,
    },
    pipings: {
        timestamp: 0,
        interval: 1600,
        speed: 2000,
        size: {
            width: 52,
        },
        range: {
            x: {
                min: -40,
                max: 380,
            },
            y: {
                min: 40,
                max: 242,
            },
            gap: 130,
        },
        list: [],
    },
}
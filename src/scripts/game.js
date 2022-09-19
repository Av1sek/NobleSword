import Platform from './platform.js'
import Player from './player.js'

export default class Game {
    constructor(ctx) {
        new Platform(ctx);
        new Player(ctx, {x: 100, y: 200})
    }
}
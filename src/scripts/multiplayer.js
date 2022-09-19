import Platform from './platform.js'
import Player from './player.js'

export default class Multiplayer {
    constructor(ctx) {
        new Platform(ctx);
        this.Player1 = new Player(ctx,this, {x: 0, y: 190}, {id: "Player1", velocity: 0, leftkey: "a", rightkey: "d"})
        this.Player2 = new Player(ctx,this, {x: 860, y: 190}, {id: "Player2", velocity: 0, leftkey: "j", rightkey: "k"})
        this.animate()
    }

    animate() {
        setInterval(() => {
        let canvas = document.getElementById('game-window');
        let ctx = canvas.getContext('2d')
        
        ctx.clearRect(0,0,canvas.width, canvas.height);
        new Platform(ctx);
        this.Player1.update();
        this.Player2.update();
        }, 20)
    }

}
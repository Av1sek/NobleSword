import Platform from './platform.js'
import Player from './player.js'

export default class Multiplayer {
    constructor(ctx) {
        new Platform(ctx);
        this.Player1 = new Player(ctx,this, {x: 0, y: 190}, {id: "Player1", velocity: 0, direction: 0, leftkey: "a", rightkey: "d", attack1: "j"})
        this.Player2 = new Player(ctx,this, {x: 860, y: 190}, {id: "Player2", velocity: 0, direction: -100, leftkey: "ArrowLeft", rightkey: "ArrowRight", attack1: "."})
        this.animate()
    }

    collision(hitbox, caller) {
        if (caller.direction === 0) {
            let hitPos = caller.position.x + hitbox.width + caller.direction
            if (caller === this.Player1) {
                let colliding = (hitPos >= this.Player2.position.x && hitPos <= this.Player2.position.x + 200)
                console.log(colliding);
            } else if (caller === this.Player2) {
                let colliding = (hitPos >= this.Player1.position.x && hitPos <= this.Player1.position.x + 200)
                console.log(colliding);
            }
        } else if (caller.direction === -100) {
            let hitPos = caller.position.x - hitbox.width
            if (caller === this.Player1) {
                let colliding = (hitPos <= this.Player2.position.x && hitPos >= this.Player2.position.x - 200)
                console.log(colliding);
            } else if (caller === this.Player2) {
                let colliding = (hitPos <= this.Player1.position.x && hitPos >= this.Player1.position.x - 200)
                console.log(colliding);
            }
        }
    }

    animate() {
        setInterval(() => {
            let canvas = document.getElementById('game-window');
            let ctx = canvas.getContext('2d')
            
            ctx.clearRect(0,0,canvas.width, canvas.height);
            new Platform(ctx);

            if (this.Player1.position.x > this.Player2.position.x) {
                this.Player1.direction = -100;
            } else {
                this.Player1.direction = 0;
            }

            if (this.Player2.position.x > this.Player1.position.x) {
                this.Player2.direction = -100;
            } else {
                this.Player2.direction = 0;
            }
            
            this.Player1.update();
            this.Player2.update(); 
        }, 20)
    }

}
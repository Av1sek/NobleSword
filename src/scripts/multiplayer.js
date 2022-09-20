import Platform from './platform.js'
import Player from './player.js'

export default class Multiplayer {
    constructor(ctx) {
        new Platform(ctx);
        this.canvasDiv = document.getElementById('canvas-div')
        this.Player1 = new Player(ctx,this, {x: 0, y: 190}, {id: "Player1", velocity: 0, direction: 0, leftkey: "a", rightkey: "d", attack1: "j", atk1DMG: 25})
        this.Player2 = new Player(ctx,this, {x: 860, y: 190}, {id: "Player2", velocity: 0, direction: -100, leftkey: "ArrowLeft", rightkey: "ArrowRight", attack1: ".", atk1DMG: 25})
        this.animate()
        this.createHealthBars()
        this.createTimer()
    }

    createHealthBars() {
        let p1Bar = document.createElement("div");
        p1Bar.setAttribute("id", "P1HealthMax");
        this.canvasDiv.appendChild(p1Bar);

        let p1Health = document.createElement("Text");
        p1Health.setAttribute("id", "P1Health");
        this.canvasDiv.appendChild(p1Health);
        p1Health.dataset.maxHealth = 400;
        p1Health.dataset.Health = 400;

        let p2Bar = document.createElement("div");
        p2Bar.setAttribute("id", "P2HealthMax");
        this.canvasDiv.appendChild(p2Bar);

        let p2Health = document.createElement("Text");
        p2Health.setAttribute("id", "P2Health");
        this.canvasDiv.appendChild(p2Health);
        p2Health.dataset.maxHealth = 400;
        p2Health.dataset.Health = 400;
    }

    updateHealth() {
        let P1Health = document.getElementById("P1Health");
        let P2Health = document.getElementById("P2Health");

        P1Health.style.width = P1Health.dataset.Health.concat("px")
        P2Health.style.width = P2Health.dataset.Health.concat("px")
    }

    createTimer() {
        let timer = document.createElement("Text");
        timer.setAttribute("id", "Timer");
        this.canvasDiv.appendChild(timer);
        timer.innerHTML = "100"
    }

    collision(hitbox, caller, dmg) {
        if (caller.direction === 0) {
            let hitPos = caller.position.x + hitbox.width + caller.direction
            if (caller === this.Player1) {
                let colliding = (hitPos >= this.Player2.position.x && hitPos <= this.Player2.position.x + 200)
                
                if (colliding) {
                    this.damage(this.Player2, dmg)
                }

            } else if (caller === this.Player2) {
                let colliding = (hitPos >= this.Player1.position.x && hitPos <= this.Player1.position.x + 200)
                
                if (colliding) {
                    this.damage(this.Player1, dmg)
                }

            }
        } else if (caller.direction === -100) {
            let hitPos = caller.position.x - hitbox.width
            if (caller === this.Player1) {
                let colliding = (hitPos <= this.Player2.position.x && hitPos >= this.Player2.position.x - 200)

                if (colliding) {
                    this.damage(this.Player2, dmg)
                }
                
            } else if (caller === this.Player2) {
                let colliding = (hitPos <= this.Player1.position.x && hitPos >= this.Player1.position.x - 200)
                
                if (colliding) {
                    this.damage(this.Player1, dmg)
                }

            }
        }
    }

    damage(player, amt) {
        if (player === this.Player1) {
            let P1Health = document.getElementById("P1Health");
            let newHealth = (parseInt(P1Health.dataset.Health) - amt).toString()
            P1Health.dataset.Health = newHealth;
        } else if (player === this.Player2) {
            let P2Health = document.getElementById("P2Health");
            let newHealth = (parseInt(P2Health.dataset.Health) - amt).toString()
            P2Health.dataset.Health = newHealth;
        }
    }


    animate() {
        setInterval(() => {
            let canvas = document.getElementById('game-window');
            let ctx = canvas.getContext('2d')

            this.updateHealth()

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
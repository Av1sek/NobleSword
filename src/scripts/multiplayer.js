import { setInterval } from 'core-js';
import Platform from './platform.js'
import Player from './player.js'
import Winner from './winner.js'

export default class Multiplayer {
    constructor(ctx) {
        new Platform(ctx);
        this.ctx = ctx;
        this.canvasDiv = document.getElementById('canvas-div');
        this.Player1 = new Player(ctx,this, {x: 0, y: 240}, {id: "Player1", velocity: 0, direction: 0, leftkey: "a", rightkey: "d", block: "s", attack1: "e", atk1DMG: 25, attack2: "r", atk2DMG: 30, attack3: "t", atk3DMG: 40})
        this.Player2 = new Player(ctx,this, {x: 860, y: 240}, {id: "Player2", velocity: 0, direction: -100, leftkey: "ArrowLeft", rightkey: "ArrowRight", block: "ArrowDown", attack1: "b", atk1DMG: 25, attack2: "n", atk2DMG: 30, attack3: "m", atk3DMG: 40})
        this.gameEnded = false;
        this.Winner;

        // this.animate();
        this.createHealthBars();
        this.createTimer();
        this.updateTimer();
        this.animate = this.animate.bind(this);
        requestAnimationFrame(this.animate);
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

        P1Health.style.width = P1Health.dataset.Health.concat("px");
        P2Health.style.width = P2Health.dataset.Health.concat("px");
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
                let colliding = (hitPos >= this.Player2.position.x && hitPos <= this.Player2.position.x + hitbox.width)
                
                if (colliding) {
                    if (this.Player2.action === "Blocking") {
                        this.Player2.blockHit();
                        this.damage(this.Player2, Math.floor(dmg/2))   
                    } else {
                        this.Player2.hurt();
                        this.damage(this.Player2, Math.floor(dmg/2))   
                    }
                }

            } else if (caller === this.Player2) {
                let colliding = (hitPos >= this.Player1.position.x && hitPos <= this.Player1.position.x + hitbox.width)
                
                if (colliding) {
                    if (this.Player1.action === "Blocking") {
                        this.Player1.blockHit();
                        this.damage(this.Player1, Math.floor(dmg/2))   
                    } else {
                        this.Player1.hurt();
                        this.damage(this.Player1, Math.floor(dmg))   
                    }
                }

            }
        } else if (caller.direction === -100) {
            let hitPos = caller.position.x - hitbox.width
            if (caller === this.Player1) {
                let colliding = (hitPos <= this.Player2.position.x && hitPos >= this.Player2.position.x - 200)

                if (colliding) {
                    if (this.Player2.action === "Blocking") {
                        this.Player2.blockHit();
                        this.damage(this.Player2, Math.floor(dmg/2))   
                    } else {
                        this.Player2.hurt();
                        this.damage(this.Player2, Math.floor(dmg/2))   
                    }
                }
                
            } else if (caller === this.Player2) {
                let colliding = (hitPos <= this.Player1.position.x && hitPos >= this.Player1.position.x - 200)
                
                if (colliding) {
                    if (this.Player1.action === "Blocking") {
                        this.Player1.blockHit();
                        this.damage(this.Player1, Math.floor(dmg/2))   
                    } else {
                        this.Player1.hurt();
                        this.damage(this.Player1, Math.floor(dmg))   
                    }
                }

            }
        }
    }

    damage(player, amt) {
        if (player === this.Player1) {
            let P1Health = document.getElementById("P1Health");
            let newHealth = (parseInt(P1Health.dataset.Health) - amt)
            P1Health.dataset.Health = newHealth.toString();

            if (newHealth <= 0) {
                this.endGame();
            }

        } else if (player === this.Player2) {
            let P2Health = document.getElementById("P2Health");
            let newHealth = (parseInt(P2Health.dataset.Health) - amt)
            P2Health.dataset.Health = newHealth.toString();

            if (newHealth <= 0) {
                this.endGame();
            }
        }
    }

    updateTimer() {
        let Timer = document.getElementById('Timer');
        const clock = setInterval(() => {
            let time = parseInt(Timer.innerHTML);
            let newtime = time - 1;
            if (newtime <= 0 || this.gameEnded) {
                clearInterval(clock);
                this.endGame()
            }
            Timer.innerHTML = newtime;
        }, 1000)
    }

    endGame() {
        this.gameEnded = true;

        let P1Health = parseInt(document.getElementById("P1Health").dataset.Health);
        let P2Health = parseInt(document.getElementById("P2Health").dataset.Health);

        if (P1Health > P2Health) {this.Winner = "PLAYER 1 WON"}
        else if (P2Health > P1Health) {this.Winner = "PLAYER 2 WON"}
        else {this.Winner = "DRAW!!!"}
        

        delete this.Player1;
        delete this.Player2;
        new Winner(this.Winner);
        document.getElementById("P1HealthMax").remove();
        document.getElementById("P2HealthMax").remove();
        document.getElementById("P1Health").remove();
        document.getElementById("P2Health").remove();
        document.getElementById("Timer").remove();
        delete this;
    }

    animate(timestamp) {


        this.updateHealth()

        this.ctx.clearRect(0,0,960, 540);
        new Platform(this.ctx);

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
        requestAnimationFrame(this.animate);

    }

}
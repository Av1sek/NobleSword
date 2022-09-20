export default class Player {
    constructor(ctx, game, position, values) {
        this.canvas = document.getElementById('game-window');
        this.ctx = ctx;
        this.game = game;
        this.position = position;
        this.id = values.id;
        this.velocity = values.velocity;
        this.attacking = false;
        this.onCooldown = false;

        this.direction = values.direction
        this.rightkey = values.rightkey;
        this.leftkey = values.leftkey;

        this.attack1 = values.attack1;
        this.atk1DMG = values.atk1DMG;


        this.hitbox = {
            position: position,
            width: 200,
            height: 100,
        }

        this.keysPressed = {
            left: false,
            right: false
        }
        this.lastKey;

        this.draw();
        this.handleClick();
    }

    attack(attacktime, cooldowntime, dmg){
        this.attacking = true;
        this.game.collision(this.hitbox, this, dmg);
        this.cooldown(cooldowntime)
        setTimeout(() => {
            this.attacking = false
        }, attacktime);
    }

    cooldown(timer) {
        this.onCooldown = true;
        setTimeout(() => {
            this.onCooldown = false;
        }, timer);
    }

    draw() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.position.x,this.position.y,100,250);
    }

    update() {
        this.draw();
        this.velocity = 0;
        if (this.attacking) {
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(this.hitbox.position.x + this.direction, this.hitbox.position.y, this.hitbox.width, this.hitbox.height);
        } else {    
            if (this.keysPressed.right && this.lastKey === this.rightkey) {
                if (this.position.x + 10 < this.canvas.width - 90) {this.position.x += 10}
            } else if (this.keysPressed.left && this.lastKey === this.leftkey) {
                if (this.position.x - 10 >= 0) {this.position.x -= 10}
            }
        }
    }

    handleClick() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case this.rightkey:
                    this.keysPressed.right = true;
                    this.lastKey = this.rightkey;    
                    break;
                case this.leftkey:    
                    this.keysPressed.left = true;
                    this.lastKey = this.leftkey;
                    break;
                case this.attack1:
                    if (!this.onCooldown) {this.attack(250,300, this.atk1DMG)}
                    break;
            }
        })
        document.addEventListener('keyup', (e) => {
            switch (e.key) {
                case this.rightkey:
                    this.keysPressed.right = false;
                    break;
                case this.leftkey:
                    this.keysPressed.left = false;
                    break;
            }
        })
    }
}
export default class Player {
    constructor(ctx, game, position, values) {
        this.canvas = document.getElementById('game-window');
        this.ctx = ctx;
        this.game = game;
        this.position = position;
        this.id = values.id;
        this.velocity = values.velocity;

        this.rightkey = values.rightkey;
        this.leftkey = values.leftkey;

        this.hitbox = {
            position: position,
            width: 200,
            height: 100,
            direction: 0
        }

        this.keysPressed = {
            left: false,
            right: false
        }
        this.lastKey;

        this.draw();
        this.handleClick();
    }

    draw() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.position.x,this.position.y,100,250);
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.hitbox.position.x + this.hitbox.direction, this.hitbox.position.y, this.hitbox.width, this.hitbox.height);
    }

    update() {
        this.draw();
        this.velocity = 0;

        if (this.keysPressed.right && this.lastKey === this.rightkey) {
            if (this.position.x + 10 < this.canvas.width - 90) {this.position.x += 10}
        } else if (this.keysPressed.left && this.lastKey === this.leftkey) {
            if (this.position.x - 10 >= 0) {this.position.x -= 10}
        }
    }

    handleClick() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case this.rightkey:
                    this.keysPressed.right = true;
                    this.lastKey = this.rightkey;
                    this.hitbox.direction = 0;
                    break;
                case this.leftkey:
                    this.keysPressed.left = true;
                    this.lastKey = this.leftkey;
                    this.hitbox.direction = -100;
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

    // handleClick() {
    //     document.addEventListener('keydown', (e) => {
    //         if (e.key === this.rightkey) {
    //             if (this.velocity + 1 < this.canvas.width - 80) {
    //                 this.velocity += 1;
    //                 this.game.render();
    //             }
    //         }
    //         if (e.key === this.leftkey) {
    //             if (this.velocity - 1 >= 0) {
    //                 console.log(this.position.x, this.canvas.width);
    //                 this.velocity -= 1;
    //                 this.game.render();
    //             }
    //         }
    //     })
    // }
}
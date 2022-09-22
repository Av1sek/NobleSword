export default class Player {
    constructor(ctx, game, position, values) {
        this.canvas = document.getElementById('game-window');
        this.ctx = ctx;
        this.game = game;
        this.position = position;
        this.id = values.id;
        this.velocity = values.velocity;
        this.action = ""
        this.onCooldown = false;

        this.blocking = false;
        this.block = values.block;

        this.direction = values.direction
        this.rightkey = values.rightkey;
        this.leftkey = values.leftkey;

        this.attack1 = values.attack1;
        this.atk1DMG = values.atk1DMG;

        this.attack2 = values.attack2;
        this.atk2DMG = values.atk2DMG;

        this.attack3 = values.attack3;
        this.atk3DMG = values.atk3DMG;

        this.img = new Image();
        this.img.src = "../../assets/knight/idle/Heroknight_Idle_0.png";
        this.num = 0;
        this.frameCounter = 0;
        this.state = "Idle";
        this.numFrames = 7
        this.stagger = 8;

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

    hurt(cooldown){
        this.cooldown(600);
        this.update_hurt();

        setTimeout(() => {
            this.hit = false
            if (this.state === "Run") {this.update_run()}
            else {this.update_idle()}
        }, 200);
    }

    attack(attacktime, cooldowntime, dmg, atk){
        this.action = "Attacking"
        this.game.collision(this.hitbox, this, dmg);
        this.cooldown(cooldowntime)

        if (atk === 1) {this.update_atk1()}
        else if (atk === 2) {this.update_atk2()}
        else if (atk === 3) {this.update_atk3()}

        setTimeout(() => {
            this.action = ""
            if (this.state === "Run") {this.update_run()}
            else {this.update_idle()}
        }, attacktime);
    }

    blockHit(){
        this.cooldown(300)
        this.update_blockAtk()

        setTimeout(() => {
            if (this.state === "Run") {this.update_run()}
            else {this.update_idle()}
        }, 300);
    }

    update_blockAtk(){
        this.state = "Block";
        this.numFrames = 5;
        this.num = 0;
        this.frameCounter = 0;
        this.stagger = 5;
    }

    cooldown(timer) {
        this.onCooldown = true;
        setTimeout(() => {
            this.onCooldown = false;
        }, timer);
    }

    update_anims() {
        this.frameCounter++;
    
        if (this.frameCounter % (this.stagger) === 0) {
            this.num++;
            if (this.num > (this.numFrames - 1)) {this.num = 0}
            this.img.src = `../../assets/knight/${this.state}/Heroknight_${this.state}_${this.num}.png`
            // console.log(`${this.num} and ${this.state}`);
        }
    }

    update_idle() {
        this.state = "Idle";
        this.numFrames = 8;
        this.num = 0;
        this.frameCounter = 0;
        this.stagger = 8;
    }

    update_run() {
        if (this.state !== "Run") {
            this.state = "Run";
            this.numFrames = 10;
            this.num = 0;
            this.frameCounter = 0;
            this.stagger = 4;
        }
    }

    update_atk1() {
        if (this.state !== "Attack1") {
            this.state = "Attack1";
            this.numFrames = 6;
            this.num = 0;
            this.frameCounter = 0;
            this.stagger = 6;
        }
    }

    update_block() {
        if (this.state !== "BlockIdle") {
            this.state = "BlockIdle";
            this.numFrames = 8;
            this.num = 0;
            this.frameCounter = 0;
            this.stagger = 8;
        }
    }

    update_atk2() {
        if (this.state !== "Attack2") {
            this.state = "Attack2";
            this.numFrames = 6;
            this.num = 0;
            this.frameCounter = 0;
            this.stagger = 6;
        }
    }

    update_atk3() {
        if (this.state !== "Attack3") {
            this.state = "Attack3";
            this.numFrames = 8;
            this.num = 0;
            this.frameCounter = 0;
            this.stagger = 8;
        }
    }

    update_hurt() {
        if (this.state !== "Hurt") {
            this.state = "Hurt";
            this.numFrames = 3;
            this.num = 0;
            this.frameCounter = 0;
            this.stagger = 3;
        }
    }

    draw() {
        // this.ctx.fillStyle = "white";
        // this.ctx.fillRect(this.position.x,this.position.y,100,250);
        if (this.direction === 0) {
            this.ctx.scale(1,1);
            this.ctx.drawImage(this.img, this.position.x - 100, this.position.y, 300, 300);
        } else {
            this.ctx.scale(-1,1);
            this.ctx.drawImage(this.img, -this.position.x - 200, this.position.y, 300, 300); //right
        }
    }

    update() {
        this.draw();
        this.velocity = 0;
        this.update_anims();
        if (this.action === "Attacking") {
            // this.ctx.fillStyle = "red";
            // this.ctx.fillRect(this.hitbox.position.x + this.direction, this.hitbox.position.y, this.hitbox.width, this.hitbox.height);
        } else if (this.action === "Blocking" && this.state !== "Block") {
            this.update_block();
        }
        else {    
            if (this.keysPressed.right && this.lastKey === this.rightkey) {
                this.update_run(); 
                if (this.position.x + 5 < this.canvas.width - 90) {this.position.x += 5}
            } else if (this.keysPressed.left && this.lastKey === this.leftkey) {
                this.update_run(); 
                if (this.position.x - 5 >= 0) {this.position.x -= 5}
            }
        }
    }

    handleClick() {
        document.addEventListener('keydown', (e) => {
            switch (e.key) {
                case this.rightkey:
                    if (this.action === "") {
                        this.keysPressed.right = true;
                        this.lastKey = this.rightkey;   
                    }
                    break;
                case this.leftkey:   
                    if (this.action === "") { 
                        this.keysPressed.left = true;
                        this.lastKey = this.leftkey;
                    }
                    break;
                case this.attack1:
                    if (!this.onCooldown) {
                        this.hitbox.width = 180;
                        this.attack(600,630, this.atk1DMG, 1);
                    }
                    break;
                case this.attack2:
                    if (!this.onCooldown) {
                        this.hitbox.width = 180;
                        this.attack(600,680, this.atk2DMG, 2);
                    }
                    break;
                case this.attack3:
                    if (!this.onCooldown) {
                        this.hitbox.width = 180;
                        this.attack(800,850, this.atk3DMG, 3);
                    }
                    break;
                case this.block:
                    this.action = "Blocking";
                    break;
            }
        })
        document.addEventListener('keyup', (e) => {
            switch (e.key) {
                case this.rightkey:
                    this.keysPressed.right = false;
                    this.update_idle();
                    break;
                case this.leftkey:
                    this.keysPressed.left = false;
                    this.update_idle();
                    break;
                case this.block:
                    this.action = ""
                    this.state = "Idle"
                    break;
            }
        })
    }
}
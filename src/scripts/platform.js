export default class Platform {
    
    constructor(ctx) {
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = "assets/backgrounds/NightBG/NightBG1.png";
        this.bgName = "NightBG"
        this.num = 1;
        this.frameCounter = 0;
        this.numFrames = 24
        this.stagger = 4;
        this.ctx.drawImage(this.img, 0,0, 1286, 540)  
    }

    update() {
        this.frameCounter++;

        this.ctx.drawImage(this.img, 0,0,1286,540);
        if (this.frameCounter % (this.stagger) === 0) {
            this.num++;
            if (this.num > (this.numFrames - 1)) {this.num = 1}
            this.img.src = `assets/backgrounds/${this.bgName}/${this.bgName}${this.num}.png`
        }
    }

}
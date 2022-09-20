export default class Platform {
    constructor(ctx) {
        this.img = new Image();
        this.img.src = "assets/backg.jpg";
        ctx.drawImage(this.img, 0,0, 960, 540);
    }
}
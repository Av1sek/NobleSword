export default class Platform {
    constructor(ctx) {
        this.img = new Image();
        this.img.src = "assets/backg.jpg";
        // this.img.onload = () => { ctx.drawImage(this.img, 0,0, 960, 540);}
        ctx.drawImage(this.img, 0,0, 960, 540)
       
    }
}
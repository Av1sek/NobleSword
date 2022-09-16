import Platform from './platform'

export default class Game {
    constructor(ctx) {
        
        let img = new Image();
        img.src = "assets/bg.png";
        console.log(img);
        console.log(ctx.drawImage(img, 0, 0, 960,540));
        new Platform(ctx)
    }
}
export default class Player {
    constructor(ctx, position) {
        this.ctx = ctx;
        this.position = position;
        this.draw()
    }

    draw() {
        console.log("WWE HERE")
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.position.x, this.position.y, 80,200);
    }

}
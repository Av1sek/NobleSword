import View from "./view";

export default class Winner{
    constructor(winner) {
        const canvas = document.getElementById('game-window');
        this.canvasDiv = document.getElementById('canvas-div');
        const ctx = canvas.getContext('2d');

        console.log(winner);
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,960,540);

        let WinnerText = document.createElement("Text");
        WinnerText.setAttribute("id", "WinnerText");
        this.canvasDiv.appendChild(WinnerText);
        WinnerText.innerHTML = winner;

        setTimeout(() => {
            ctx.clearRect(0,0,canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0,0,960,540);
            WinnerText.remove();
            new View(canvas,ctx);
            delete this;
        }, 2000)

    }
}

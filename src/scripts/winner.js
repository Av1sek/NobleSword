export default class Winner{
    constructor(winner) {
        let canvas = document.getElementById('game-window');
        this.canvasDiv = document.getElementById('canvas-div');
        let ctx = canvas.getContext('2d');

        console.log(winner);
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,960,540);

        let WinnerText = document.createElement("Text");
        WinnerText.setAttribute("id", "WinnerText");
        this.canvasDiv.appendChild(WinnerText);
        WinnerText.innerHTML = winner;
    }
}

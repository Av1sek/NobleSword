import View from "./view";

export default class Winner{
    constructor(winner) {
        const canvas = document.getElementById('game-window');
        this.canvasDiv = document.getElementById('canvas-div');
        const ctx = canvas.getContext('2d');

        let WinnerText = document.createElement("Text");
        WinnerText.setAttribute("id", "WinnerText");
        this.canvasDiv.appendChild(WinnerText);
        WinnerText.innerHTML = winner;

        setTimeout(() => {
            WinnerText.remove();
            new View(canvas,ctx);
            delete this;
        }, 2000)

    }
}

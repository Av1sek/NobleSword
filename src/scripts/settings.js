import View from './view'

export default class Settings {
    constructor() {
        let canvas = document.getElementById("game-window");
        this.canvasDiv = document.getElementById('canvas-div')
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0,0, canvas.width, canvas.height);

        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        this.createButton({id: "Back", url: "assets/view/backLogo.png"});

        let body = document.createElement('Text');
        body.setAttribute("id", "HelpBody");
        this.canvasDiv.appendChild(body);
        body.innerHTML = "NO HELP YET"
    }

    createButton(values) {
        let img = new Image();
        img.src = values.url;
        img.setAttribute("id", values.id);
        this.canvasDiv.appendChild(img);
    }

}

document.addEventListener("click", (el) => {
    let btn = el.target;
    let canvas = document.getElementById('game-window');
    let ctx = canvas.getContext('2d');

    if (btn.id === "Back") {loadView(canvas, ctx)} 
})

function loadView(canvas, ctx) {
    
    if (document.getElementById("HelpBody")) {
        document.getElementById("HelpBody").remove();
    }

    if (document.getElementById("CreditsBody")) {
        document.getElementById("CreditsBody").remove();
    }

    document.getElementById("Back").remove();
    new View(canvas, ctx);
}
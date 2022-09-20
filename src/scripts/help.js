import View from './view'

export default class Help {
    constructor() {
        let canvas = document.getElementById("game-window");
        this.canvasDiv = document.getElementById('canvas-div')
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0,0, canvas.width, canvas.height);

        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        this.createButton({id: "Back", html: "Back"})

        let body = document.createElement('Text');
        body.setAttribute("id", "HelpBody");
        this.canvasDiv.appendChild(body);
        body.innerHTML = "NO HELP YET"

    }

    createButton(values) {
        let txt = document.createElement("Text");
        txt.setAttribute("id", values.id);
        this.canvasDiv.appendChild(txt);
        txt.innerHTML = values.html;
    }
}

document.addEventListener("click", (el) => {
    let txt = el.target;
    let canvas = document.getElementById('game-window');
    let ctx = canvas.getContext('2d');

    if (txt.tagName === "TEXT") {
        if (txt.id === "Back") {loadView(canvas, ctx)} 
    }
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
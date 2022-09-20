export default class Credits {
    constructor() {
        let canvas = document.getElementById("game-window");
        this.canvasDiv = document.getElementById('canvas-div');
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0,0, canvas.width, canvas.height);

        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        this.createButton({id: "Back", html: "Back"})

        let body = document.createElement('Text');
        body.setAttribute("id", "CreditsBody");
        this.canvasDiv.appendChild(body);
        body.innerHTML = "Avisek AND THE WORLD"

    }

    createButton(values) {
        let txt = document.createElement("Text");
        txt.setAttribute("id", values.id);
        this.canvasDiv.appendChild(txt);
        txt.innerHTML = values.html;
    }
}

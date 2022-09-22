export default class About {
    constructor() {
        let canvas = document.getElementById("game-window");
        this.canvasDiv = document.getElementById('canvas-div');
        let ctx = canvas.getContext('2d');
        
        ctx.clearRect(0,0, canvas.width, canvas.height);

        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        this.createButton({id: "Back", url: "assets/view/backLogo.png"});

        let body = document.createElement('Text');
        body.setAttribute("id", "CreditsBody");
        this.canvasDiv.appendChild(body);
        body.innerHTML = "About who?"

    }

    createButton(values) {
        let img = new Image();
        img.src = values.url;
        img.setAttribute("id", values.id);
        this.canvasDiv.appendChild(img);
    }
}
import Multiplayer from './multiplayer.js'
import Help from './help.js'
import Credits from './credits.js';

export default class View {
    constructor(canvas, ctx) {
        this.ctx = ctx;
        this.canvasDiv = document.getElementById('canvas-div');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        this.createButton({id: "SP", html: "Singleplayer"});
        this.createButton({id: "MP", html: "Multiplayer"})
        this.createButton({id: "Help", html: "Help"});
        this.createButton({id: "Credits", html: "Credits"});

        // this.img = new Image();
        // this.img.src = "assets/menuSwordsman.png";
        // this.ctx.drawImage(this.img, 10, 10);
        // console.log(this.img)
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
    let ctx = document.getElementById("game-window").getContext('2d')
    if (txt.tagName === "TEXT") {
        if (txt.id === "SP") {loadSinglePlayer(ctx)} 
        else if (txt.id === "MP") {loadMultiPlayer(ctx)}
        else if (txt.id === "Help") {loadHelp(ctx)}
        else if (txt.id === "Credits") {loadCredits(ctx)}
    }
})

function loadSinglePlayer(ctx) {
    deleteButtons();
    new Multiplayer(ctx);
}

function loadMultiPlayer(ctx) {
    deleteButtons();
    new Multiplayer(ctx);
}

function loadHelp(ctx) {
    deleteButtons();
    new Help();
}

function loadCredits(ctx) {
    deleteButtons();
    new Credits()
}

function deleteButtons(){
    document.getElementById("MP").remove();
    document.getElementById("SP").remove();
    document.getElementById("Help").remove();
    document.getElementById("Credits").remove();
}
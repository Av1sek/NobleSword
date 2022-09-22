import Multiplayer from './multiplayer.js'
import More from './more.js'
import Settings from './settings.js'
import About from './about.js';

export default class View {
    constructor(canvas, ctx) {
        this.ctx = ctx;
        this.canvasDiv = document.getElementById('canvas-div');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        this.createButton({id: "ViewLogo", url: "assets/view/viewTitleLogo.png"});
        this.createButton({id: "Play", url: "assets/view/playLogo.png"});
        this.createButton({id: "Settings", url: "assets/view/settingsLogo.png"})
        this.createButton({id: "About", url: "assets/view/aboutLogo.png"});
        this.createButton({id: "More", url: "assets/view/moreLogo.png"});

        // this.ctx.drawImage(this.img, 10, 10);
        // console.log(this.img)
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
    let ctx = document.getElementById("game-window").getContext('2d')
    if (btn.id === "Play") {loadPlay(ctx)} 
    else if (btn.id === "About") {loadAbout(ctx)}
    else if (btn.id === "More") {loadMore(ctx)}
    else if (btn.id === "Settings") {loadSettings(ctx)}
})

function loadPlay(ctx) {
    deleteButtons();
    new Multiplayer(ctx);
}

function loadAbout(ctx) {
    deleteButtons();
    new About(ctx);
}

function loadMore(ctx) {
    deleteButtons();
    new More(ctx);
}

function loadSettings(ctx) {
    deleteButtons();
    new Settings(ctx)
}

function deleteButtons(){
    document.getElementById("Play").remove();
    document.getElementById("About").remove();
    document.getElementById("More").remove();
    document.getElementById("Settings").remove();
    document.getElementById("ViewLogo").remove();
}
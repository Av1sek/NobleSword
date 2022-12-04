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

        let settingsDiv = document.createElement('Div');
        settingsDiv.setAttribute("id", "Settings-Div");
        this.canvasDiv.appendChild(settingsDiv);

        let settingsTitle = document.createElement('Div');
        settingsTitle.setAttribute("id", "Settings-Title");
        settingsDiv.appendChild(settingsTitle);
        settingsTitle.innerHTML = "Settings"

        let controlsContainer = document.createElement('Div');
        controlsContainer.setAttribute("id", "controls-container");
        settingsDiv.appendChild(controlsContainer);

        let p1Container = document.createElement('Div');
        p1Container.setAttribute("id", "p1-container");
        controlsContainer.appendChild(p1Container);

        let player1Text = document.createElement('Div');
        player1Text.setAttribute("id", "settings-p1-text");
        p1Container.appendChild(player1Text);
        player1Text.innerHTML = "Player 1 Controls";

        let player1Movement = document.createElement('Div');
        player1Movement.setAttribute("id", "settings-p1-movement");
        p1Container.appendChild(player1Movement);
        player1Movement.innerHTML = "Movement Keys: A(Left) D(Right)";
        
        let player1Block = document.createElement('Div');
        player1Block.setAttribute("id", "settings-p1-block");
        p1Container.appendChild(player1Block);
        player1Block.innerHTML = "Block: S (hold)";

        let player1Attack = document.createElement('Div');
        player1Attack.setAttribute("id", "settings-p1-attack");
        p1Container.appendChild(player1Attack);
        player1Attack.innerHTML = "Attack Keys: E(light) R(Medium) T(Heavy)";

        let p2Container = document.createElement('Div');
        p2Container.setAttribute("id", "p1-container");
        controlsContainer.appendChild(p2Container);

        let player2Text = document.createElement('Div');
        player2Text.setAttribute("id", "settings-p1-text");
        p2Container.appendChild(player2Text);
        player2Text.innerHTML = "Player 2 Controls";

        let player2Movement = document.createElement('Div');
        player2Movement.setAttribute("id", "settings-p1-movement");
        p2Container.appendChild(player2Movement);
        player2Movement.innerHTML = "Movement Keys: leftArr(Left) rightArr(Right)";
        
        let player2Block = document.createElement('Div');
        player2Block.setAttribute("id", "settings-p1-block");
        p2Container.appendChild(player2Block);
        player2Block.innerHTML = "Block: J (hold)";

        let player2Attack = document.createElement('Div');
        player2Attack.setAttribute("id", "settings-p1-attack");
        p2Container.appendChild(player2Attack);
        player2Attack.innerHTML = "Attack Keys: B(light) N(Medium) M(Heavy)";

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
    
    if (document.getElementById("Settings-Div")) {
        document.getElementById("Settings-Div").remove();
    }
    
    document.getElementById("Back").remove();

    new View(canvas, ctx);

    if (document.getElementById("About-Div")) {
        document.getElementById("About-Div").remove()
        document.getElementById("About-Title").remove()
        document.getElementById("About-Body").remove()
    }


}
export default class About {
    constructor() {
        let canvas = document.getElementById("game-window");
        this.canvasDiv = document.getElementById('canvas-div');
        let ctx = canvas.getContext('2d');
        
        ctx.clearRect(0,0, canvas.width, canvas.height);

        ctx.fillStyle = "black";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        this.createButton({id: "Back", url: "assets/view/backLogo.png"});

        let aboutDiv = document.createElement('Div');
        aboutDiv.setAttribute("id", "About-Div");
        this.canvasDiv.appendChild(aboutDiv);

        let aboutTitle = document.createElement('Div');
        aboutTitle.setAttribute("id", "About-Title");
        aboutDiv.appendChild(aboutTitle);
        aboutTitle.innerHTML = "About"

        let aboutBody = document.createElement('Div');
        aboutBody.setAttribute("id", "About-Body");
        aboutDiv.appendChild(aboutBody);
        aboutBody.innerHTML = "NobleSword is a 2D two-player fighting game created using native Javascript, in 1 week. This game was inspired by retro fighting games like Street Fighter 2. The players are able to move in both directions and are able to attack and block attacks. If a player's health runs out the other player wins. If the timer runs out, the player with more health wins, and if both players have the same amount of health then it is considered a draw."
    }

    createButton(values) {
        let img = new Image();
        img.src = values.url;
        img.setAttribute("id", values.id);
        this.canvasDiv.appendChild(img);
    }
}
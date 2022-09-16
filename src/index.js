import Game from './scripts/game.js'

document.addEventListener('DOMContentLoaded', () => {
    const gameCanvas = document.getElementById('game-window');
    const ctx = gameCanvas.getContext('2d');
    gameCanvas.width = 960;
    gameCanvas.height = 540;

    new Game(ctx)

})
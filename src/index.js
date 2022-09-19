import Game from './scripts/game.js'
import View from './scripts/view.js'

document.addEventListener('DOMContentLoaded', () => {
    const gameCanvas = document.getElementById('game-window');
    const ctx = gameCanvas.getContext('2d');
    gameCanvas.width = 960;
    gameCanvas.height = 540;

    new View(gameCanvas, ctx)

})
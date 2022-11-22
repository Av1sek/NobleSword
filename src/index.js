import View from './scripts/view.js'

document.addEventListener('DOMContentLoaded', () => {
    const gameCanvas = document.getElementById('game-window');
    const ctx = gameCanvas.getContext('2d');
    gameCanvas.width = 960;
    gameCanvas.height = 540;

    for (let i = 1; i < 25; i++) {
        let img = new Image();
        img.src = `assets/backgrounds/NightBG/NightBG${i}.png`
    }

    preloadKnightAnims("Attack1", 6)
    preloadKnightAnims("Attack2", 6)
    preloadKnightAnims("Attack3", 8)
    preloadKnightAnims("Block", 5)
    preloadKnightAnims("BlockIdle", 8)
    preloadKnightAnims("Hurt", 3)
    preloadKnightAnims("Idle", 8)
    preloadKnightAnims("Run", 10)

    new View(gameCanvas, ctx)
})

const preloadKnightAnims = (type, num) => {
    for (let i = 0; i < num; i++) {
        let img = new Image();
        img.src = `assets/knight/${type}/HeroKnight_${type}_${i}.png`
    }
}
import Scene from './Scene.js';

window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const GameScene = new Scene(canvas);
    window.setInterval(GameScene.render, 220);
});
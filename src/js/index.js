import Scene from './Scene.js';

window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const GameScene = new Scene(canvas);
    GameScene.setEventListeners();
    window.setInterval(GameScene.render, 100);
});
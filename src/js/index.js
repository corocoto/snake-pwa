import Scene from './Scene.js';

window.addEventListener('load', () => {
	if ('serviceWorker' in navigator) {
		try {
			navigator.serviceWorker.register('serviceWorker.js');
		} catch (e) {
			console.log('Service Worker Registration Failed');
		}
	}

	const canvas = document.getElementById('canvas');
    const GameScene = new Scene(canvas);
    window.setInterval(GameScene.render, 220);
});

import '../css/index.css';
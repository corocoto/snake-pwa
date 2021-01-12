const BG_COLOR = '#ece1c9';
const SCALE = 40;

import Apple from './Apple.js';
import Snake from './Snake.js';

export default class Scene {
	constructor (canvasRef) {
		this.canvas = canvasRef;
		this.ctx = this.canvas.getContext('2d');
		this.resultValueBlock = document.querySelector('.text-container__result__value');
		this.render = this.render.bind(this);

		this.setSceneSize();
		this.AppleInst = new Apple(SCALE, this.rows, this.columns, this.ctx);
		this.SnakeInst = new Snake(SCALE, this.rows, this.columns, this.ctx, this.width, this.height);

		while (this.AppleInst.x === this.SnakeInst.x && this.AppleInst.y === this.SnakeInst.y) {
			this.AppleInst.generatePosition();
			this.SnakeInst.generatePosition();
		}

		this.render();
	}

	setSceneSize () {
		this.width = this.canvas.width = window.innerWidth - SCALE * 6;
		this.height = this.canvas.height = window.innerHeight;
		this.rows = this.height / SCALE;
		this.columns = this.width / SCALE;
	}

	render () {
		this.ctx.clearRect(0, 0, this.width, this.height);

		this.ctx.fillStyle = BG_COLOR;
		this.ctx.fillRect(0, 0, this.width, this.height);

		this.AppleInst.render();

		this.SnakeInst.updateCoordinates();
		this.SnakeInst.render();

		if (this.SnakeInst.isEatApple(this.AppleInst)) {
			this.SnakeInst.countOfEatApples++;
			this.updateUiResult(this.SnakeInst.countOfEatApples);
			while (this.AppleInst.x === this.SnakeInst.x && this.AppleInst.y === this.SnakeInst.y) {
				this.AppleInst.generatePosition();
			}
		}

		if (this.SnakeInst.isEatItself()) {
			this.SnakeInst.countOfEatApples = 0;
			this.updateUiResult(this.SnakeInst.countOfEatApples);
			this.SnakeInst.tail = [];
			do {
				this.SnakeInst.generatePosition();
			} while (this.AppleInst.x === this.SnakeInst.x && this.AppleInst.y === this.SnakeInst.y);
		}
	}

	updateUiResult (res) {
		this.resultValueBlock.textContent = res;
	}
}
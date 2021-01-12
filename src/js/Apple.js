const APPLE_COLOR = '#de8a66';

export default class Apple {
	constructor (size, sceneRows, sceneColumns, ctx) {
		this.ctx = ctx;
		this.size = size;
		this.radius = size / 2;
		this.sceneRows = sceneRows;
		this.sceneColumns = sceneColumns;

		this.x = 0;
		this.y = 0;
	}

	generatePosition () {
		this.x = (Math.floor(Math.random() * this.sceneColumns - 1) + 1) * this.size;
		this.y = (Math.floor(Math.random() * this.sceneRows - 1) + 1) * this.size;
	}

	render () {
		this.ctx.fillStyle = APPLE_COLOR;
		this.ctx.beginPath();
		this.ctx.arc(this.x + this.radius, this.y + this.radius, this.radius, 0, 2 * Math.PI);
		this.ctx.fill();
		this.ctx.closePath();
	}
}
const APPLE_COLOR = '#C3321D';

export default class Apple{
    constructor(ctx, size){
        this.ctx = ctx;
        this.size = size;
        this.radius = size / 2;

        this.xPos = 0;
        this.yPos = 0;
    }

    generatePosition(){
        const maxW = window.innerWidth - this.size;
        const maxH = window.innerHeight - this.size;

        this.xPos = Math.floor(Math.random() * (maxW + 1));
        this.yPos = Math.floor(Math.random() * (maxH + 1));
    }

    render() {
        this.ctx.fillStyle = APPLE_COLOR;
        this.ctx.beginPath();
		this.ctx.arc(this.xPos + this.radius, this.yPos + this.radius, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    }
}
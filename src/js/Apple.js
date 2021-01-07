const APPLE_COLOR = '#C3321D';

export default class Apple{
    constructor(size, sceneRows, sceneColumns, ctx){
        this.ctx = ctx;
        this.size = size;

        this.sceneRows = sceneRows
        this.sceneColumns = sceneColumns;

        this.x = 0;
        this.y = 0;
    }

    generatePosition(){
        this.x = (Math.floor(Math.random() * this.sceneColumns - 1) + 1) * this.size;
        this.y = (Math.floor(Math.random() * this.sceneRows - 1) + 1) * this.size;
    }

    render() {
        this.ctx.fillStyle = APPLE_COLOR;
		this.ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}
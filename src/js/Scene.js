const BG_COLOR = '#CE9752';

import Apple from './Apple.js';
import Snake from './Snake.js';

export default class Scene{
    constructor(canvasRef) {
        this.canvas = canvasRef;
        this.ctx = this.canvas.getContext('2d');
        this.render = this.render.bind(this);

        this.setSceneSize();
        this.AppleInst = new Apple(this.ctx, SCALE);
        this.SnakeInst = new Snake(this.ctx, SCALE, SCALE);
        
        while(this.AppleInst.xPos === this.SnakeInst.xPos && this.AppleInst.yPos === this.SnakeInst.yPos){
            this.AppleInst.generatePosition();
            this.SnakeInst.generatePosition();
        } 

        this.render();
    }

    setEventListeners(){
        window.addEventListener('resize', () => {
            this.setSceneSize();
            this.render()
        });
    }
    setSceneSize(){
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    isSnakeEatApple(){
        const APPLE_RADIUS = SCALE / 2;
        if (this.SnakeInst.xPos >= this.AppleInst.xPos - APPLE_RADIUS && 
            this.SnakeInst.xPos <= this.AppleInst.xPos + APPLE_RADIUS &&
            this.SnakeInst.yPos >= this.AppleInst.yPos - APPLE_RADIUS &&
            this.SnakeInst.yPos <= this.AppleInst.yPos + APPLE_RADIUS){
            debugger;
        }
    }

    render(){
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = BG_COLOR;
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.isSnakeEatApple();
        this.AppleInst.render();
        this.SnakeInst.render();
    }

}
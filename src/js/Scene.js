const BG_COLOR = '#CE9752';
const SCALE = 20;

import Apple from './Apple.js';

export default class Scene{
    constructor(canvasRef) {
        this.canvas = canvasRef;
        this.ctx = this.canvas.getContext('2d');
        this.render = this.render.bind(this);

        this.setSceneSize();
        this.AppleInst = new Apple(this.ctx, SCALE);
        this.AppleInst.generatePosition();
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

    // calcColumnsCount(){
    //     this.columns = Math.floor(this.width / SCALE);
    // }

    // calcRowsCount(){
    //     this.rows = Math.floor(this.height / SCALE);
    // }

    render(){
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = BG_COLOR;
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.AppleInst.render();
        window.requestAnimationFrame(this.render);
    }

}
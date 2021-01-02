const BG_COLOR = '#000000';

export default class Scene{
    constructor(canvasRef) {
        this.canvas = canvasRef;
        this.ctx = this.canvas.getContext('2d');
        
        this.setSceneSize = this.setSceneSize;

        this.setSceneSize();
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

    render(){
        this.ctx.fillStyle = BG_COLOR;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

}
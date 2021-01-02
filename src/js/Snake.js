const SNAKE_COLOR = '#017D89';


export default class Snake {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;

        this.xPos = 0;
        this.yPos = 0;
        this.keyDownEventHandler = this.keyDownEventHandler.bind(this);
        window.addEventListener('keydown', this.keyDownEventHandler);
        this.turnOn = 'RIGHT';
    }

    generatePosition() {
        const maxW = window.innerWidth - this.width;
        const maxH = window.innerHeight - this.height;

        this.xPos = Math.floor(Math.random() * (maxW + 1));
        this.yPos = Math.floor(Math.random() * (maxH + 1));
    }

    render(){
        this.ctx.fillStyle = SNAKE_COLOR;
        this.ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
        switch(this.turnOn) {
            case 'RIGHT':
                this.xPos += this.width;
                break;
            case 'LEFT':
                this.xPos -= this.width;
                break;
            case 'TOP':
                this.yPos -= this.width;
                break;
            case 'BOTTOM':
                this.yPos += this.width;  
                break;          
        }
    }

    keyDownEventHandler({keyCode}) {
        switch (keyCode){
            case 38:
            case 87:    
                this.turnOn = 'TOP';
                break;
            case 39:
            case 68:
                this.turnOn = 'RIGHT';
                break;
            case 40:
            case 83:
                this.turnOn = 'BOTTOM';
                break;
            case 37:
            case 65:
                this.turnOn = 'LEFT';
                break;                        
        }
    }
}
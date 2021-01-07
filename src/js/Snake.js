const SNAKE_COLOR = '#017D89';


export default class Snake {
    constructor(scale, sceneRows, sceneColumns, ctx, sceneWidth, sceneHeight) {
        this.ctx = ctx;
        this.sceneRows = sceneRows;
        this.sceneColumns = sceneColumns;
        this.sceneWidth = sceneWidth;
        this.sceneHeight = sceneHeight;

        this.x = 0;
        this.y = 0;
        this.turnOn = 'RIGHT';
        this.xSpeed = scale;
        this.ySpeed = 0;
        this.scale = scale;

        this.tail = [];
        this.countOfEatApples = 0;

        this.keyDownEventHandler = this.keyDownEventHandler.bind(this);
        window.addEventListener('keydown', this.keyDownEventHandler);
    }

    generatePosition() {
        debugger;
        this.x = (Math.floor(Math.random() * this.sceneColumns - 1) + 1) * this.scale;
        this.y = (Math.floor(Math.random() * this.sceneRows - 1) + 1) * this.scale;
    }

    updateCoordinates(){
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];
        }
        
        this.tail[this.countOfEatApples - 1] = { 
            x: this.x, 
            y: this.y 
        };

        this.x += this.xSpeed;
        this.y += this.ySpeed;
      
        if (this.x > this.sceneWidth) {
            this.x = 0;
        } else if (this.y > this.sceneHeight) {
            this.y = 0;
        } else if (this.x < 0) {
            this.x = this.sceneWidth;
        } else if (this.y < 0) {
            this.y = this.sceneHeight;
        }
    }

    render(){
        debugger;
        this.ctx.fillStyle = SNAKE_COLOR;
        this.tail.forEach(({x, y}) => this.ctx.fillRect(x, y, this.scale, this.scale));
        this.ctx.fillRect(this.x, this.y, this.scale, this.scale);
    }

    setDirection(){
        switch(this.turnOn) {
            case 'RIGHT':
                this.xSpeed = this.scale;
                this.ySpeed = 0; 
                break;
            case 'LEFT':
                this.xSpeed = -this.scale;
                this.ySpeed = 0;
                break;
            case 'TOP':
                this.xSpeed = 0
                this.ySpeed = -this.scale;
                break;
            case 'BOTTOM':
                this.xSpeed = 0;
                this.ySpeed = this.scale;  
                break;          
        }
    }

    isEatApple(AppleInst) {
        if (this.x === AppleInst.x && this.y === AppleInst.y) {
            this.countOfEatApples++;
            return true;
        }
        return false;
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
        this.setDirection();
    }
}
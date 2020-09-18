const Game = require("./game");

function MovingObject(options){
    if(options.pos) {this.pos = options.pos;}
    if(options.vel) {this.vel = options.vel;}
    if(options.radius) {this.radius = options.radius;}
    if(options.color) {this.color = options.color;}
    if (options.game) { this.game = options.game; }
}

MovingObject.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
    
    
}

MovingObject.prototype.move = function(timeDelta){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    // debugger
    this.game.wrap(this.pos)
    
    
}

MovingObject.prototype.isCollidedWith = function(otherObject){
    // debugger
    let thisPosX = Math.floor(this.pos[0])
    let thisPosY = Math.floor(this.pos[1]) 
    let otherPosX = Math.floor(otherObject.pos[0])
    let otherPosY = Math.floor(otherObject.pos[1])
    let dist = Math.sqrt((Math.abs(thisPosX - otherPosX)) **2 + Math.abs((thisPosY - otherPosY))**2)
    // debugger
    console.log(dist)
    if(dist + 5 < (this.radius + otherObject.radius)){
        // debugger
        this.collideWith(otherObject)
        console.log('COLLISION')
        // alert("COLLISION")
    }
    return false
    // Math.abs()
    // // debugger
    // if ((thisPosX === otherPosX)){
        

    // }
}

MovingObject.prototype.collideWith = function(otherObject){
    this.game.remove(otherObject);
    this.game.remove(this);
}



module.exports = MovingObject ;


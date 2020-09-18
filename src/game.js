const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");


function Game(){
    
    this.ships = [];
    this.asteroids = [];
    this.allObjects = [];

    this.addAsteroids();
}

Game.prototype.addObjects = function (object) {
    let all = [];
    object.forEach((asteroid) => this.allObjects.push(asteroid));
    // all.concat(this.ships)
    // debugger
    return all;

}


Game.DIM_X = 900;
Game.DIM_Y = 700;

Game.NUM_ASTEROIDS = 4;
Game.prototype.addShip = function (){
    const newShip = new Ship({ pos: this.randomPosition(), game: this })
    this.ships.push(newShip)
    this.addObjects(this.ships)
    return newShip
}


Game.prototype.addAsteroids = function (num, position){
    num = num || Game.NUM_ASTEROIDS
    position = position || this.randomPosition()
    let asteroids = [];
    let i = 0;
    while(i < num){
        i++;
        let ast = new Asteroid({pos: position, game: this})
        asteroids.push(ast);
    }
    this.addObjects(asteroids)
    return asteroids;
}


Game.prototype.randomPosition = function(){
    // debugger
    let pos = [
        Game.DIM_X * Math.random(),
        Game.DIM_Y * Math.random()
    ];
    return pos
}


Game.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    console.log(Game.DIM_X)
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects.forEach((object) => {
        object.draw(ctx);
    });
}

Game.prototype.moveObjects = function(){
    this.allObjects.forEach((object) => {
        console.log(object);
        object.move();
    });
}

Game.prototype.wrap = function(pos){
    // debugger
    if (pos[0] > 905) { pos[0] = 0 }
    if (pos[0] < -5) { pos[0] = 900 }
    if (pos[1] > 705) { pos[1] = 0 }
    if (pos[1] < -5) { pos[1] = 700}

    return pos;
}

Game.prototype.checkCollisions = function(){
    this.allObjects.forEach((object1, idx) =>{
        this.allObjects.forEach((object2, idx2) => {
            // debugger
            if(idx2 > idx){
                return object1.isCollidedWith(object2)
                
            }
        })
    })
}

// Game.prototype.step = function step(delta){
//     this.moveObjects(delta)
//     this.checkCollisions()
// }

Game.prototype.step = function step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
};
Game.prototype.remove = function (object){
    let ast = this.allObjects.indexOf(object)
    if(this.allObjects[ast] instanceof Ship){
        // debugger
        this.allObjects[ast].pos = this.randomPosition();
        this.allObjects[ast].vel = [0, 0];

    }else {
        delete this.allObjects[ast]
        let pos = [
            (Game.DIM_X * -1) * Math.random(),
            (Game.DIM_Y * -1) * Math.random()
        ];
        this.addAsteroids(1)
    }
    
}


module.exports = Game;
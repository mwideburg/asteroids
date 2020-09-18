const Game = require('./game.js');

// const keys = require("./keymaster.js");
GameView.MOVES = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0],
};

function GameView(game, ctx){
    this.game = game;
    this.ctx = ctx;
    console.log(this.game)
    this.ship = this.game.addShip();;
}

GameView.prototype.bindKeyHandlers = function bindKeyHandlers(){
    const enterprise = this.ship
    
    key('up', function () { enterprise.power([0, -1])})
    key('down', function () { enterprise.power([0, 1])})
    key('left', function () { enterprise.power([-1, 0])})
    key('right', function () { enterprise.power([1, 0])})
    // Object.keys(GameView.MOVES).forEach(function (k) {
    //     const move = GameView.MOVES[k];
    //     key(k, function () { enterprise.power(move); });
    //     debugger
    // });

    // key("space", function () { enterprise.fireBullet(); });
}

// GameView.prototype.start = function(){
//     let that = this
//     that.bindKeyHandlers();

//     console.log(this.ship);
//     setInterval(function(){
        
//         that.context.clearRect(0, 0, Game.DIM_X.height, Game.DIM_Y.width);
//         that.game.moveObjects();
//         that.game.draw(that.context);
//         that.game.step();
//     },24)
    
// }

GameView.prototype.start = function start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    // start the animation
    requestAnimationFrame(this.animate.bind(this));
};


GameView.prototype.animate = function animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
};


module.exports = GameView;
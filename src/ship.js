const CONSTANTS = { COLOR: "white", RADIUS: 15 };
const utils = require("./utils.js");
const MovingObject = require("./moving_object.js");
// const KeyMaster = require("../dist/keymaster.js");


function Ship (options){
        this.color = CONSTANTS.COLOR;
        this.radius = CONSTANTS.RADIUS;
        this.pos = options.pos;
        this.vel = [0, 0];
    MovingObject.call(this, options);

}

utils.inherits(Ship, MovingObject)


Ship.prototype.power = function power(impulse){
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
    
}



module.exports = Ship;

// module.exports = Ship;


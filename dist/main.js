/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const CONSTANTS = {COLOR: \"lightgreen\", RADIUS:20};\nconst utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\n\nfunction Asteroid(options){\n    \n    this.color = CONSTANTS.COLOR;\n    this.radius = options.radius || CONSTANTS.RADIUS;\n    this.pos = options.pos;\n    this.vel = utils.randomVec(2);\n    this.game = options.game\n\n}\n\n\nutils.inherits(Asteroid, MovingObject)\n\n\nmodule.exports = Asteroid ;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n\nfunction Game(){\n    \n    this.ships = [];\n    this.asteroids = [];\n    this.allObjects = [];\n\n    this.addAsteroids();\n}\n\nGame.prototype.addObjects = function (object) {\n    let all = [];\n    object.forEach((asteroid) => this.allObjects.push(asteroid));\n    // all.concat(this.ships)\n    // debugger\n    return all;\n\n}\n\n\nGame.DIM_X = 900;\nGame.DIM_Y = 700;\n\nGame.NUM_ASTEROIDS = 4;\nGame.prototype.addShip = function (){\n    const newShip = new Ship({ pos: this.randomPosition(), game: this })\n    this.ships.push(newShip)\n    this.addObjects(this.ships)\n    return newShip\n}\n\n\nGame.prototype.addAsteroids = function (num, position){\n    num = num || Game.NUM_ASTEROIDS\n    position = position || this.randomPosition()\n    let asteroids = [];\n    let i = 0;\n    while(i < num){\n        i++;\n        let ast = new Asteroid({pos: position, game: this})\n        asteroids.push(ast);\n    }\n    this.addObjects(asteroids)\n    return asteroids;\n}\n\n\nGame.prototype.randomPosition = function(){\n    // debugger\n    let pos = [\n        Game.DIM_X * Math.random(),\n        Game.DIM_Y * Math.random()\n    ];\n    return pos\n}\n\n\nGame.prototype.draw = function(ctx){\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    console.log(Game.DIM_X)\n    ctx.fillStyle = 'black';\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.allObjects.forEach((object) => {\n        object.draw(ctx);\n    });\n}\n\nGame.prototype.moveObjects = function(){\n    this.allObjects.forEach((object) => {\n        console.log(object);\n        object.move();\n    });\n}\n\nGame.prototype.wrap = function(pos){\n    // debugger\n    if (pos[0] > 905) { pos[0] = 0 }\n    if (pos[0] < -5) { pos[0] = 900 }\n    if (pos[1] > 705) { pos[1] = 0 }\n    if (pos[1] < -5) { pos[1] = 700}\n\n    return pos;\n}\n\nGame.prototype.checkCollisions = function(){\n    this.allObjects.forEach((object1, idx) =>{\n        this.allObjects.forEach((object2, idx2) => {\n            // debugger\n            if(idx2 > idx){\n                return object1.isCollidedWith(object2)\n                \n            }\n        })\n    })\n}\n\n// Game.prototype.step = function step(delta){\n//     this.moveObjects(delta)\n//     this.checkCollisions()\n// }\n\nGame.prototype.step = function step(delta) {\n    this.moveObjects(delta);\n    this.checkCollisions();\n};\nGame.prototype.remove = function (object){\n    let ast = this.allObjects.indexOf(object)\n    if(this.allObjects[ast] instanceof Ship){\n        // debugger\n        this.allObjects[ast].pos = this.randomPosition();\n        this.allObjects[ast].vel = [0, 0];\n\n    }else {\n        delete this.allObjects[ast]\n        let pos = [\n            (Game.DIM_X * -1) * Math.random(),\n            (Game.DIM_Y * -1) * Math.random()\n        ];\n        this.addAsteroids(1)\n    }\n    \n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n// const keys = require(\"./keymaster.js\");\nGameView.MOVES = {\n    w: [0, -1],\n    a: [-1, 0],\n    s: [0, 1],\n    d: [1, 0],\n};\n\nfunction GameView(game, ctx){\n    this.game = game;\n    this.ctx = ctx;\n    console.log(this.game)\n    this.ship = this.game.addShip();;\n}\n\nGameView.prototype.bindKeyHandlers = function bindKeyHandlers(){\n    const enterprise = this.ship\n    \n    key('up', function () { enterprise.power([0, -1])})\n    key('down', function () { enterprise.power([0, 1])})\n    key('left', function () { enterprise.power([-1, 0])})\n    key('right', function () { enterprise.power([1, 0])})\n    // Object.keys(GameView.MOVES).forEach(function (k) {\n    //     const move = GameView.MOVES[k];\n    //     key(k, function () { enterprise.power(move); });\n    //     debugger\n    // });\n\n    // key(\"space\", function () { enterprise.fireBullet(); });\n}\n\n// GameView.prototype.start = function(){\n//     let that = this\n//     that.bindKeyHandlers();\n\n//     console.log(this.ship);\n//     setInterval(function(){\n        \n//         that.context.clearRect(0, 0, Game.DIM_X.height, Game.DIM_Y.width);\n//         that.game.moveObjects();\n//         that.game.draw(that.context);\n//         that.game.step();\n//     },24)\n    \n// }\n\nGameView.prototype.start = function start() {\n    this.bindKeyHandlers();\n    this.lastTime = 0;\n    // start the animation\n    requestAnimationFrame(this.animate.bind(this));\n};\n\n\nGameView.prototype.animate = function animate(time) {\n    const timeDelta = time - this.lastTime;\n\n    this.game.step(timeDelta);\n    this.game.draw(this.ctx);\n    this.lastTime = time;\n\n    // every call to animate requests causes another call to animate\n    requestAnimationFrame(this.animate.bind(this));\n};\n\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const MovingObject = require('./moving_object.js');\n// const Asteroid = require('./asteroid.js');\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n// console.log(typeof MovingObject);\n\n// window.MovingObject = MovingObject;\n// window.Asteroid = Asteroid;\n// window.Game = Game;\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\nconst canEle = document.getElementById(\"game-canvas\");\ncanEle.width = Game.DIM_X;\ncanEle.hieght = Game.DIM_Y;\n\n\nconst ctx = canEle.getContext(\"2d\");\n\n// ctx.fillStyle = \"black\";\n// ctx.fillRect(0, 0, 700, 900);\n\nconst game = new Game();\nnew GameView(game, ctx).start();\n    \n\n// let asteroid = new Asteroid({ pos: [250, 250]});\n// console.log(asteroid);\n// asteroid.draw(ctx);\n//     setInterval(function(){\n//         asteroid.move(ctx);\n//         ctx.clearRect(0, 0, canEle.width, canEle.height)\n//         ctx.fillStyle = \"black\";\n//         ctx.fillRect(0, 0, 700, 900);\n//         asteroid.draw(ctx);\n//     }, 100)\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction MovingObject(options){\n    if(options.pos) {this.pos = options.pos;}\n    if(options.vel) {this.vel = options.vel;}\n    if(options.radius) {this.radius = options.radius;}\n    if(options.color) {this.color = options.color;}\n    if (options.game) { this.game = options.game; }\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.strokeStyle = this.color;\n    ctx.stroke();\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    \n    \n}\n\nMovingObject.prototype.move = function(timeDelta){\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    // debugger\n    this.game.wrap(this.pos)\n    \n    \n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n    // debugger\n    let thisPosX = Math.floor(this.pos[0])\n    let thisPosY = Math.floor(this.pos[1]) \n    let otherPosX = Math.floor(otherObject.pos[0])\n    let otherPosY = Math.floor(otherObject.pos[1])\n    let dist = Math.sqrt((Math.abs(thisPosX - otherPosX)) **2 + Math.abs((thisPosY - otherPosY))**2)\n    // debugger\n    console.log(dist)\n    if(dist + 5 < (this.radius + otherObject.radius)){\n        // debugger\n        this.collideWith(otherObject)\n        console.log('COLLISION')\n        // alert(\"COLLISION\")\n    }\n    return false\n    // Math.abs()\n    // // debugger\n    // if ((thisPosX === otherPosX)){\n        \n\n    // }\n}\n\nMovingObject.prototype.collideWith = function(otherObject){\n    this.game.remove(otherObject);\n    this.game.remove(this);\n}\n\n\n\nmodule.exports = MovingObject ;\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const CONSTANTS = { COLOR: \"white\", RADIUS: 15 };\nconst utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n// const KeyMaster = require(\"../dist/keymaster.js\");\n\n\nfunction Ship (options){\n        this.color = CONSTANTS.COLOR;\n        this.radius = CONSTANTS.RADIUS;\n        this.pos = options.pos;\n        this.vel = [0, 0];\n    MovingObject.call(this, options);\n\n}\n\nutils.inherits(Ship, MovingObject)\n\n\nShip.prototype.power = function power(impulse){\n    this.vel[0] += impulse[0];\n    this.vel[1] += impulse[1];\n    \n}\n\n\n\nmodule.exports = Ship;\n\n// module.exports = Ship;\n\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        const Surrogate = function Surrogate(){};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n    \n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });
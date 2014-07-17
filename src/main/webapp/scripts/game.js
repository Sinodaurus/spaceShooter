function Game() {
	var gameConstruct;
}
Game.prototype.init = function() {
	this.paused = false;
	this.gameConstruct = new GameConstruct();
	this.gameConstruct.init();
}
Game.prototype.pause = function() {
	this.gameConstruct.pause();
}
Game.prototype.resume = function() {
	this.gameConstruct.resume();
}
Game.prototype.play = function() {
	var _this = this;
	_this.gameConstruct.drawBackground();
	_this.gameConstruct.drawPlayer();
	setInterval(function() {
		_this.listenForKeys();
	}, 0);
}
Game.prototype.listenForKeys = function() {
	var pushed = false;
	if (Key.isDown(Key.UP)) {
		pushed = true;
		this.gameConstruct.player.moveUp();
	}
	if (Key.isDown(Key.LEFT)) {
		pushed = true;
		this.gameConstruct.player.moveLeft();
	}
	if (Key.isDown(Key.DOWN)) {
		pushed = true;
		this.gameConstruct.player.moveDown();
	}
	if (Key.isDown(Key.RIGHT)) {
		pushed = true;
		this.gameConstruct.player.moveRight();
	}
	if(pushed === false)
		this.gameConstruct.player.animationStop();
}

//                 ---------------------- KEYS -------------------------

var Key = {
		_pressed : {},

		LEFT : 37,
		UP : 38,
		RIGHT : 39,
		DOWN : 40,

		isDown : function(keyCode) {
			return this._pressed[keyCode];
		},

		onKeydown : function(event) {
			this._pressed[event.keyCode] = true;
		},

		onKeyup : function(event) {
			delete this._pressed[event.keyCode];
		}
	};
	window.addEventListener('keyup', function(event) {
		Key.onKeyup(event);
	}, false);
	window.addEventListener('keydown', function(event) {
		Key.onKeydown(event);
	}, false);
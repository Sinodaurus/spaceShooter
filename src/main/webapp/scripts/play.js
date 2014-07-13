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
}
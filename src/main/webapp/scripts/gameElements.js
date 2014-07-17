function GameConstruct() {
}
GameConstruct.prototype.init = function() {
	this.player = new Player(1);
	this.scroll_back = 0;
	this.scroll_front = 0;
	this.paused = false;
	this.gameSpeed = 0;
	this.canvas_background_still = document.getElementById('background_still');
	this.canvas_background_moving = document.getElementById('background_moving');
	this.canvas_ship = document.getElementById('ship');
	if (this.canvas_background_still.getContext && this.canvas_background_moving.getContext && this.canvas_ship.getContext) {
		this.bckgImg_still = new Image();
		this.ctxBckgrStill = this.canvas_background_still.getContext('2d');
		this.bckgImg_still.src = "/spaceShooter/img/space_back.png";
		this.bckgImg_moving = new Image();
		this.ctxBckgrMoving = this.canvas_background_moving.getContext('2d');
		this.bckgImg_moving.src = "/spaceShooter/img/space_front.png";
		this.ctxShip = this.canvas_ship.getContext('2d');
		this.player.setImage("/spaceShooter/img/ship.png");
		this.player.location(50, 300);
		this.player.dimensions(18, 18, 60);
	}
}
GameConstruct.prototype.pause = function() {
	this.paused = true;
}
GameConstruct.prototype.resume = function() {
	this.paused = false;
}
GameConstruct.prototype.drawBackground = function() {
		var _this = this;
		this.bckgImg_still.onload = function() {
			setInterval(function() {
				if(_this.paused === false) {
					var speed_back = 0.3;
					_this.ctxBckgrStill.clearRect(0, _this.scroll_back - 1, 1024, 576);
					_this.ctxBckgrStill.clearRect(0, (_this.scroll_back - 1) - 576, 1024, 576);
					_this.ctxBckgrStill.drawImage(_this.bckgImg_still, 0, _this.scroll_back);
					_this.ctxBckgrStill.drawImage(_this.bckgImg_still, 0, _this.scroll_back - 576);
					if(_this.scroll_back >= 576) {
						_this.scroll_back = 0;
					}
					_this.scroll_back += speed_back;
				}
			}, this.gameSpeed);
		}
		this.bckgImg_moving.onload = function() {
			setInterval(function() {
				if(_this.paused === false) {
					var speed_front = 1;
					_this.ctxBckgrMoving.clearRect(0, _this.scroll_front - 1, 1024, 576);
					_this.ctxBckgrMoving.clearRect(0, (_this.scroll_front - 1) - 576, 1024, 576);
					_this.ctxBckgrMoving.drawImage(_this.bckgImg_moving, 0, _this.scroll_front);
					_this.ctxBckgrMoving.drawImage(_this.bckgImg_moving, 0, _this.scroll_front - 576);
					if(_this.scroll_front >= 576) {
						_this.scroll_front = 0;
					}
					_this.scroll_front += speed_front;
				}
			}, this.gameSpeed);
		}
}
GameConstruct.prototype.drawPlayer = function() {
	var _this = this;
	_this.player.image().onload = function() {
		setInterval(function() {
			if(_this.paused === false) {
				_this.ctxShip.clearRect(_this.player.lastShipX, _this.player.lastShipY, _this.player.height, _this.player.width);
				_this.ctxShip.drawImage(_this.player.img, _this.player.direction, _this.player.animation, _this.player.step, _this.player.step, _this.player.shipX, _this.player.shipY, _this.player.height, _this.player.width);
				_this.player.lastShipY = _this.player.shipY;
				_this.player.lastShipX = _this.player.shipX;
			}
		}, this.gameSpeed);
		}
	
}
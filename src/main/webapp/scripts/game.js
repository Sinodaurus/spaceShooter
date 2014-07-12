function Game() {
	var canvas_background_still;
	var canvas_background_moving;
	var canvas_ship;
	var bckgImg_still;
	var bckgImg_moving;
	var shipImg;
	var ctxBckgrStill;
	var ctxBckgrMoving;
	var ctxShip;
}
Game.prototype.init = function() {
	canvas_background_still = document.getElementById('background_still');
	canvas_background_moving = document.getElementById('background_moving');
	canvas_ship = document.getElementById('ship');
	if (canvas_background_still.getContext) {
		bckgImg_still = new Image();
		ctxBckgrStill = background_still.getContext('2d');
		bckgImg_still.src = "/spaceShooter/img/space_back.png";
		bckgImg_still.onload = function() {
			var scroll = 0;
			var speed_back = 0.3;
			setInterval(function() {
				ctxBckgrStill.clearRect(0, scroll - 1, 1024, 576);
				ctxBckgrStill.clearRect(0, (scroll - 1) - 576, 1024, 576);
				ctxBckgrStill.drawImage(bckgImg_still, 0, scroll);
				ctxBckgrStill.drawImage(bckgImg_still, 0, scroll - 576);
				if(scroll >= 576) {
					scroll = 0;
				}
				scroll += speed_back;
			}, 20);
		}
	}
	if (canvas_background_moving.getContext) {
		bckgImg_moving = new Image();
		ctxBckgrMoving = background_moving.getContext('2d');
		bckgImg_moving.src = "/spaceShooter/img/space_front.png";
		bckgImg_moving.onload = function() {
			var scroll = 0;
			var speed_front = 1;
			setInterval(function() {
				ctxBckgrMoving.clearRect(0, scroll - 1, 1024, 576);
				ctxBckgrMoving.clearRect(0, (scroll - 1) - 576, 1024, 576);
				ctxBckgrMoving.drawImage(bckgImg_moving, 0, scroll);
				ctxBckgrMoving.drawImage(bckgImg_moving, 0, scroll - 576);
				if(scroll >= 576) {
					scroll = 0;
				}
				scroll += speed_front;
			}, 20);
		}
	}
	if (canvas_ship.getContext) {
		shipImg = new Image();
		ctxShip = canvas_ship.getContext('2d');
		shipImg.src = "/spaceShooter/img/ship.png";
		shipImg.onload = function() {
			ctxShip.drawImage(shipImg, 0, 0, 18, 18, 50, 300, 30, 30);
		}
	}
}

Game.prototype.drawBackground = function() {
	this.ctxLevel.drawImage(levelImg, 0, 0);
}
Game.prototype.drawPlayer = function() {
	this.ctxPlayer.drawImage(playerImg, 0, 0);
}
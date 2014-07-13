var GUNS = {
		TYPE1 : {name: "Pidgeon Blaster", dmg: 5},
		TYPE2 : {name: "Cat Decapitator", dmg: 10}
};

var SHIELDS = {
		ABSORB : {name: "Windshield", amount: 20},
		REFLECT : {name: "Ricochet", amount: 20}
};

Function.prototype.inheritsFrom = function( parentClassOrObject ){ 
	if ( parentClassOrObject.constructor == Function ) 
	{ 
		//Normal Inheritance 
		this.prototype = new parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype.parent = parentClassOrObject.prototype;
	} 
	else 
	{ 
		//Pure Virtual Inheritance 
		this.prototype = parentClassOrObject;
		this.prototype.constructor = this;
		this.prototype.parent = parentClassOrObject;
	} 
	return this;
}

//					------------------------  BODY -------------------------------

function Body(number) {
	this.alive = true;
	this.number = number;
	this.guns = new Array();
	this.animation = 0;
	this.direction = 0;
}
Body.prototype.dimensions = function(height, width, printSize) {
	this.step = height;
	this.height = (height / this.step) * printSize;
	this.width = (width / this.step) * printSize;
}
Body.prototype.location = function(x, y) {
	this.shipX = x;
	this.shipY = y;
	this.lastShipX = x;
	this.lastShipY = y;
}
Body.prototype.setAnimation = function(animation) {
	if(this.animation < 54) {
		this.animation += animation * this.step;
	}
}
Body.prototype.setImage = function(image) {
	this.img = new Image();
	this.img.src = image;
}
Body.prototype.image = function() {
	return this.img;
}
Body.prototype.moveUp = function() {
	this.shipY -= 3;
}
Body.prototype.moveDown = function() {
	this.shipY += 3;
}
Body.prototype.moveLeft = function(key) {
	if(key.isDown(first(key._pressed)) === true) {
		this.direction = this.step;
		this.animationStart();
		this.shipX -= 3;
	} else {
		this.animationStop();
	}
}
Body.prototype.moveRight = function(key) {
	if(key.isDown(first(key._pressed)) === true) {
	this.direction = 0;
	this.animationStart();
	this.shipX += 3;
	} else {
		this.animationStop();
	}
}
function first(obj) {
	for(var a in obj) return a;
}
Body.prototype.animationStart = function() {
	for(var i = 0; i < 100000; i++) {
	}
	this.setAnimation(1);
}
Body.prototype.animationStop = function() {
	while(this.animation !== 0) {
		for(var i = 0; i < 100000; i++) {
		}
		this.animation -= this.step;
	}
}
Body.prototype.health = function(health) {
	this.health = health;
}
Body.prototype.texture = function(texture) {
	this.texture = texture;
}
Body.prototype.shields = function(shield) {
	this.shield = shield;
}
Body.prototype.addGun = function(gun) {
	this.guns.push(gun);
}
Body.prototype.getGuns = function() {
	return this.guns;
}
Body.prototype.toString = function() {
	return "id: " + this.number + " ... height: " + this.height + " ... width: " + this.width + " ... Alive: " + this.alive;
}

//					------------------------  PLAYER -------------------------------

function Player(number) {
	this.number = "Player " + number;
}
Player.inheritsFrom(Body);

//					------------------------  CONSUMABLE -------------------------------

function Consumable() {
	this.duration = 10;
}
Consumable.prototype.toString = function() {
	return this.type.name + " ... dmg: " + this.type.dmg;
}

//					------------------------  GUN -------------------------------

function Gun(type) {
	this.type = type;
}
Gun.inheritsFrom(Consumable);

//					------------------------  SHIELD -------------------------------

function Shield(type) {
	this.type = type;
}
Shield.inheritsFrom(Consumable);


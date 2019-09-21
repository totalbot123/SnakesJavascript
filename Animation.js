var canvas = document.querySelector('canvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var snakeBodyWidth = 15;
var snakeSpeed = snakeBodyWidth/5;

var ctx = canvas.getContext('2d');

var fruit = undefined;
var snakeHead = new Snake(width/2, height/2, snakeSpeed, snakeBodyWidth, 'rose');
var snakeBody = [];
for (i = 0; i < 100; ++i) {
	snakeBody.push(new Snake(width/2, height/2, snakeSpeed, snakeBodyWidth, 'rose'));
}
document.addEventListener('keydown', handleKeyPressed);

var previousClick = new Date();
var commandQueue;

function handleKeyPressed(e) {
	if (e.defaultPrevented) {
		return; // Do nothing if event already handled
	}
	
	currentClick = new Date();
	if ((currentClick.getTime() - previousClick.getTime()) < 17*5) {
		return;
	}
	previousClick = new Date();
	
	switch(e.code) {
		case "KeyS":
		case "ArrowDown":
			snakeHead.updateDirection('D');
			break;
		case "KeyW":
		case "ArrowUp":
			snakeHead.updateDirection('U');
			break;
		case "KeyA":
		case "ArrowLeft":
			snakeHead.updateDirection('L');
			break;
		case "KeyD":
		case "ArrowRight":
			snakeHead.updateDirection('R');
			break;
	}
}

function loop() {
	ctx.fillStyle = '#6da0a2';
	ctx.fillRect(0, 0, width, height);
	
	if (fruit == undefined) {
		spawnFruit();
	} else {
		fruit.draw();
	}
	
	animateSnake();	
	
	var detected = detectCollision();
	if (detected) {
		return;
	} else {
		requestAnimationFrame(loop);
	}
}

function animateSnake() {
	snakeHead.draw();
	snakeHead.move();
	for (i in snakeBody) {
		ridiculustest1 = Math.abs(snakeBody[i].posX - snakeHead.posX) >= snakeHead.size || Math.abs(snakeBody[i].posY - snakeHead.posY) >= snakeHead.size;
		if (i == 0) {
			if (ridiculustest1) {
				snakeBody[i].velX = snakeHead.velX;
				snakeBody[i].velY = snakeHead.velY;
				if (!snakeBody[i].visible) {
					snakeBody[i].visible = true;
				}
			}
		} else {
			ridiculustest2 = Math.abs(snakeBody[i].posX - snakeBody[i-1].posX) >= snakeBody[i].size || Math.abs(snakeBody[i].posY - snakeBody[i-1].posY) >= snakeBody[i].size;
			
			if (ridiculustest2) {
				snakeBody[i].velX = snakeBody[i - 1].velX;
				snakeBody[i].velY = snakeBody[i - 1].velY;
				if (!snakeBody[i].visible) {
					snakeBody[i].visible = true;
				}
			}
			
		}
		if (snakeBody[i].visible) {
			snakeBody[i].draw();
			snakeBody[i].move();
		}
	}
}

function spawnFruit() {
	let posX = Math.round(Math.random() * width);
	let posY = Math.round(Math.random() * height);
	
	while (fruitCollidesWithSnake(posX, posY)) {
		posX = Math.round(Math.random() * width);
		posY = Math.round(Math.random() * height);
	}
	fruit = new Fruit(posX, posY, snakeBodyWidth);
	
}

function fruitCollidesWithSnake(posX, posY) {
	for (i in snakeBody[i]) {
		if (snakeBody[i].visible && Math.abs(snakeBody[i].posX - posX) < snakeBodyWidth || Math.abs(snakeBody[i].posY - posY) < snakeBodyWidth) {
			return true;
		}
	}
	return false;
}

function detectCollision() {
	magicalNumber = snakeBodyWidth - snakeSpeed - 1;
	for (i = 2; i < snakeBody.length; ++i) {
		if (Math.abs(snakeBody[i].posX - snakeHead.posX) < magicalNumber && Math.abs(snakeBody[i].posY - snakeHead.posY) < magicalNumber && snakeBody[i].visible) {
			return true;
		}
	}
	
	return false;
}

loop();
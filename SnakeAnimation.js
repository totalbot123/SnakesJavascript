var snakeBodyWidth = 15;
var snakeSpeed = snakeBodyWidth / 5;

var snakeHead = new Snake(fixPosition(width / 2), fixPosition(height / 2), snakeSpeed, snakeBodyWidth, "rose");
snakeHead.visible = true;
var snakeBody = [snakeHead];
var commandQueue = [];

function animateSnake() {
	snakeBody[0].draw()
	snakeBody[0].move();
	for (i = 1; i < snakeBody.length; ++i) {
		ridiculustest2 =
			Math.abs(snakeBody[i].posX - snakeBody[i - 1].posX) >= snakeBody[i].size ||
			Math.abs(snakeBody[i].posY - snakeBody[i - 1].posY) >= snakeBody[i].size;

		if (ridiculustest2) {
			snakeBody[i].velX = snakeBody[i - 1].velX;
			snakeBody[i].velY = snakeBody[i - 1].velY;
			if (!snakeBody[i].visible) {
				snakeBody[i].visible = true;
			}
		}

		if (snakeBody[i].visible) {
			snakeBody[i].draw();
			snakeBody[i].move();
		}
	}
	updateHeadVelocity();
}

function updateHeadVelocity() {
	if (commandQueue.length > 2) {
		commandQueue.length = 2;
	}
	if (commandQueue.length > 0 && snakeBody[0].posX%snakeBodyWidth == 0 && snakeBody[0].posY%snakeBodyWidth == 0) {
		snakeBody[0].updateDirection(commandQueue.shift());
	}
}

function detectSnakeCollision() {
	magicalNumber = snakeBodyWidth - snakeSpeed - 1;
	for (i = 2; i < snakeBody.length; ++i) {
		if (
			Math.abs(snakeBody[i].posX - snakeBody[0].posX) < magicalNumber &&
			Math.abs(snakeBody[i].posY - snakeBody[0].posY) < magicalNumber &&
			snakeBody[i].visible && !snakeInGrowth()
		) {
			return true;
		}
	}

	return false;
}

function snakeInGrowth() {
	for (i in snakeBody) {
		if (snakeBody[i].velX == 0 || snakeBody[i].velY == 0) {
			return true;
		}
	}
	return false;
}
var fruit = undefined;

function drawFruit() {
	if (fruit == undefined) {
		spawnFruit();
	}
	fruit.draw();
}

function spawnFruit() {
	let posX;
	let posY;
	do {
		posX = Math.round(Math.random() * (width - snakeBodyWidth)) + canvasX;
		posY = Math.round(Math.random() * (height - snakeBodyWidth)) + canvasY;
	} while (fruitCollidesWithSnake(posX, posY));

	fruit = new Fruit(fixPosition(posX), fixPosition(posY), snakeBodyWidth);
}

function fruitCollidesWithSnake(posX, posY) {
	for (i in snakeBody) {
		if (
			(snakeBody[i].visible && Math.abs(snakeBody[i].posX - posX) < snakeBodyWidth) ||
			Math.abs(snakeBody[i].posY - posY) < snakeBodyWidth
		) {
			return true;
		}
	}
	return false;
}
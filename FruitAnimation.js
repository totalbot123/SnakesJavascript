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
		posX = randomBetween(canvasX, width - snakeBodyWidth); //canvasX;//
		posY = randomBetween(canvasY, height - snakeBodyWidth);
	} while (fruitCollidesWithSnake(posX, posY));

	fruit = new Fruit(fixPosition(posX), fixPosition(posY), snakeBodyWidth);
}

function randomBetween(start, end) {
	return Math.round(Math.random() * end) + start;
}

function fruitCollidesWithSnake(posX, posY) {
	for (i in snakeBody) {
		if (
			(Math.abs(snakeBody[i].posX - posX) < snakeBodyWidth) ||
			Math.abs(snakeBody[i].posY - posY) < snakeBodyWidth
		) {
			return true;
		}
	}
	return false;
}
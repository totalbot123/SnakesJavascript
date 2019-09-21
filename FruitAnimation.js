var fruit = undefined;

function drawFruit() {
	if (fruit == undefined) {
		spawnFruit();
	}
	fruit.draw();
}

function spawnFruit() {
	let posX = Math.round(Math.random() * width - snakeBodyWidth) + snakeBodyWidth;
	let posY = Math.round(Math.random() * height - snakeBodyWidth) + snakeBodyWidth;

	while (fruitCollidesWithSnake(posX, posY)) {
		posX = Math.round(Math.random() * width);
		posY = Math.round(Math.random() * height);
	}
	fruit = new Fruit(posX, posY, snakeBodyWidth);
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
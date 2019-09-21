function eatFruit() {
	if (
		Math.abs(snakeBody[0].posX - fruit.posX) < snakeBodyWidth &&
		Math.abs(snakeBody[0].posY - fruit.posY) < snakeBodyWidth
	) {
        fruit = undefined;
        snakeElement = snakeBody[0].clone();
        snakeElement.visible = false;
        snakeBody.splice(0, 0, snakeElement);
        for (i = 1; i < snakeBody.length; ++i) {
            snakeBody[i].velX = 0;
            snakeBody[i].velY = 0;
        }
	}
}

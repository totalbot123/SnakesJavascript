function eatFruit() {
     if (
        Math.abs(snakeBody[0].posX - fruit.posX) < snakeBodyWidth &&
        Math.abs(snakeBody[0].posY - fruit.posY) < snakeBodyWidth
     ) {
        snakeElement = snakeBody[0].clone();
        snakeElement.visible = false;
        snakeElement.posX = fruit.posX;
        snakeElement.posY = fruit.posY;
        fruit = undefined;
        snakeBody.splice(0, 0, snakeElement);
     }
}

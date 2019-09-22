document.addEventListener("keydown", handleKeyPressed);

var previousCommandTime = new Date();

function loop() {
	drawCanvas();
	drawFruit();
	animateSnake();
	eatFruit();

	var detected = detectSnakeCollision();
	if (detected) {
		return;
	} else {
		requestAnimationFrame(loop);
	}
}

function handleKeyPressed(e) {
	if (e.defaultPrevented) {
		return; // Do nothing if event already handled
	}

	currentClick = new Date();
	if (currentClick.getTime() - previousCommandTime.getTime() < 10) {
		return;
	}
	previousCommandTime = new Date();

	switch (e.code) {
		case "KeyS":
		case "ArrowDown":
			commandQueue.push('D');
			break;
		case "KeyW":
		case "ArrowUp":
			commandQueue.push('U');
			break;
		case "KeyA":
		case "ArrowLeft":
			commandQueue.push('L');
			break;
		case "KeyD":
		case "ArrowRight":
			commandQueue.push('R');
			break;
	}
}

loop();

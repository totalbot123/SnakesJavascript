function Snake(posX, posY, speed, size, color) {
	this.posX = posX;
	this.posY = posY;
	this.speed = speed;
	this.velX = speed;
	this.velY = 0;
	this.size = size;
	this.color = color;
	this.direction = 'R';
	this.visible = false;
}

Snake.prototype.draw = function() {
	ctx.fillStyle = 'green';
	ctx.fillRect(this.posX, this.posY, this.size, this.size);
}

Snake.prototype.move = function() {
	if (this.posX >= width) {
		this.posX = canvasX + 1;
	}
	if (this.posY >= height) {
		this.posY = canvasY + 1;
	}
	if (this.posX + this.size <= canvasX + snakeBodyWidth) {
		this.posX = width;
	}
	if (this.posY + this.size <= canvasY + snakeBodyWidth) {
		this.posY = height;
	}
	
	this.posX += this.velX;
	this.posY += this.velY;
}

Snake.prototype.updateDirection = function(C) {
	switch (C) {
		case 'U':
			if (this.direction != 'D') {
				this.velY = -this.speed;
				this.velX = 0;
				this.direction = 'U';
			}
			break;
		case 'D':
			if (this.direction != 'U') {
				this.velY = this.speed;
				this.velX = 0;
				this.direction = 'D';
			}
			break;
		case 'L':
			if (this.direction != 'R') {
				this.velX = -this.speed;
				this.velY = 0;
				this.direction = 'L';
			}
			break;
		case 'R':
			if (this.direction != 'L') {
				this.velX = this.speed;
				this.velY = 0;
				this.direction = 'R';
			}
			break;
		
	}
}

Snake.prototype.clone = function() {
	if (this instanceof Object) {
        copy = new Snake();
        for (var attr in this) {
            if (this.hasOwnProperty(attr)) copy[attr] = this[attr];
        }
        return copy;
    }
}
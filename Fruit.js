function Fruit(x, y, size) {
	this.posX = x;
	this.posY = y;
	this.size = size;
	this.color = 'red';
}

Fruit.prototype.draw = function() {
	ctx.fillStyle = this.color;
	ctx.fillRect(this.posX, this.posY, this.size, this.size);
}
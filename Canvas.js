var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var width = 70 * 15;
var height = 35 * 15;
var canvasX = fixPosition((window.innerWidth - width) / 2);
var canvasY = fixPosition((window.innerHeight - height) / 2);

function drawCanvas() {
	ctx.fillStyle = "#6da0a2";
	ctx.fillRect(canvasX, canvasY, width, height);
}

function fixPosition(position) {
	return position - (position % 15);
}

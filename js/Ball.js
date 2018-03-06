const Ball = function () {
	const r = 25;
	let x = Math.floor(width / 2);
	let y = Math.floor(height / 2);
	let stepX = 10;
	let stepY = 10;

	const reset = function () {
		 x = Math.floor(width / 2);
		 y = Math.floor(height / 2);
		 stepX *= Math.round(Math.random()) * 2 - 1;
		 stepY *= Math.round(Math.random()) * 2 - 1;
	}

	const edges = function () {

		if (y - r <= 0 || y + r >= height) {
			stepY = -stepY;
		}
	}

	const checkScore = function (){
		if(x - r <= 0){
			reset();
			return 2
		}

		if(x + r >= width){
			reset();
			return 1
		}
	}

	const move = function () {
		x += stepX;
		y += stepY;
		edges();
	}

	const collision = function (player){
		let dx = Math.abs(x - player.getX() - player.getW() / 2);
		let dy = Math.abs(y - player.getY() - player.getH() / 2);

		if (dx > player.getW() / 2 + r || dy > player.getH() / 2 + r) {
			return false
		}

		if (dx <= player.getW / 2 || dy <= player.getH() / 2) {
			stepX =  - stepX;
			return true
		}
	}

	const draw = function () {

		ellipseMode(CENTER);
		fill(255,50,50)
		noStroke();
		ellipse(x, y, r * 2, r * 2);

	}

	return {
		draw,
		move,
		collision,
		checkScore,
	}
	
}
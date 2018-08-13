class Level {
	constructor() {
		this.map = this.constructMap(25);
	}

	constructMap(tiles) {
		var matrix = [];
		for (var row = 0; row < tiles; row++) {
			var currentRow = [];
			for (var column = 0; column < tiles; column++) {
				currentRow.push(column);
			}
			matrix.push(currentRow);
		}
		console.log(matrix);
		return matrix;
	}
}

var level = new Level();
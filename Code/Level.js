class Level {
	constructor() {
		this.map = this.createCustomMap();
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
		HtmlHandler.constructMap(matrix);
		return matrix;
	}

	createCustomMap() {
		var map = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
							 [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
							 [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
							 [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
							 [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
							 [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
							 [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
							 [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
							 [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
							 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
	
		HtmlHandler.constructMap(map);
	}
}
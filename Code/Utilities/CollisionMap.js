class CollisionMap extends Time {
  constructor() {
    super();
    this.width = 1920;
    this.height = 1080;
    this.size = 20;
    this.map = this.createMap();
    this.character = null;
    this.input = new _Input();
    this.onEveryFrame(() => { this.checkForInput() });
  };
  
  createMap(n = 20) {
    var map = [];
    var rowX = 0;
    var rowY = 0;

    for (var row = 0; row < n; row++) {
      var currentRow = [];
      for (var col = 0; col < n; col++) {
        var square = new Square(col, row, '0');
        currentRow.push(square);
        rowX += this.height / this.size;
        console.log(rowX);
      }
      map.push(currentRow);
      rowX = 0;
      rowY += this.height / this.size;
    }

    return map;
  }

  visualize() {
    var visualMap = '';
    
    this.map.forEach((row, rowIndex) => {
      var visualRow = '';
      row.forEach((col, colIndex) => {
        visualRow += `${this.map[rowIndex][colIndex].value} `
      });
      visualMap += visualRow + '\n';
    });
    console.log(visualMap);
    return visualMap;
  }

  isInBounds(x, y) {
    return (this.map && this.map[y] && this.map[y][x]);
  }

  placeCharacter(x, y, character) {
    if (!this.isInBounds(x, y)) return;
    
    if (!this.character) { 
      this.character = character;
    }
    
    this.character.x = x;
    this.character.y = y;
    this.map[y][x].value = '7';
    this.visualize();
  }

  moveCharacter(xDir = 0, yDir = 0) {
    if (this.character) {
      //debugger;
      var oldPosX = this.character.x;
      var oldPosY = this.character.y;
      var newPosX = oldPosX + xDir;
      var newPosY = oldPosY - yDir;

      if (!this.isInBounds(newPosX, newPosY)) return;

      this.map[oldPosY][oldPosX].value = '0';
      this.map[newPosY][newPosX].value = '7';
      this.character.x = newPosX;
      this.character.y = newPosY;
      this.visualize();
    }
  }

  checkForInput() {
    if (this.character.isAbleToMove) {
      if (this.input.upKeyDown) {
        this.moveCharacter(0, 1);
      }
      else if (this.input.downKeyDown) {
        this.moveCharacter(0, -1);
      }
      else if (this.input.leftKeyDown) {
        this.moveCharacter(-1, 0);
      }
      else if (this.input.rightKeyDown) {
        this.moveCharacter(1, 0);
      }
      this.character.isAbleToMove = false;
    }
    else if (!this.character.isAbleToMove) {
      if (this.input.allKeysUp()) {
        this.character.isAbleToMove = true;
      }
    }
  }
}
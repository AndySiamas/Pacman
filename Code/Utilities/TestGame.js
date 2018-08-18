class TestGame {
  constructor() {
    var map = new CollisionMap();
    var char = new Character();
    map.placeCharacter(1, 1, char);
  };
}

var game = new TestGame();
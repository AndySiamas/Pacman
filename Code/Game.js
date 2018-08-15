class Game {
  constructor() {
    $('document').ready(function() {
      var actor = new Actor('pacman', 30);
      var level = new Level();
    });
  }
}

var game = new Game();
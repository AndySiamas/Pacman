class Game {
  constructor() {
    $('document').ready(function() {
      var actor = new Actor('pacman', 50);
      var input = new Input();
      actor.onEveryFrame(()=>{actor.move(20, 20)});
    });
  }
}

var game = new Game();
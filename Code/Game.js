class Game {
  constructor() {
    $('document').ready(function() {
      var actor = new Actor('pacman', 50);
      //actor.onEveryFrame(function(){ console.log(Input.rightKeyDown); });
    });
  }
}

var game = new Game();
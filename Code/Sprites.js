class sprites {
  constructor() {
    this.pacman = { node: '<span class="Actor" id="Pacman"> <img src="Images/Pacman/PacmanStatic.png"> </span>', class: 'Pacman' };
  }

  createSprite(className) {
    return HtmlHandler.append(className);
  }
}

var Sprites = new sprites();
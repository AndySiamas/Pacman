class sprites {
  constructor() {
    this.pacman = { node: '<span class="Actor" id="Pacman"> <img src="Images/Gifs/Pacman.gif"> </span>', class: 'Pacman' };
  }

  createSprite(className) {
    return HtmlHandler.append(className);
  }
}

var Sprites = new sprites();
class sprites {
  constructor() {
    this.pacman = { node: '<span class="Actor" id="Pacman"> <img src="Images/Pacman/PacmanStatic.png"> </span>', class: 'Pacman' };
    this.block = { node: '<span class="Block" id="Block"> <img src="Images/Level/MainBlock.png"> </span>', class: 'Block' };
  }

  createSprite(className) {
    return HtmlHandler.append(className);
  }
}

var Sprites = new sprites();
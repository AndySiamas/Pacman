class Actor extends Time {
  constructor(className, speed) {
    super();
    this.node = Sprites.createSprite(className);
    this.speed = speed;
    this.x = parseInt(this.node.css('left'));
    this.y = parseInt(this.node.css('top'));
  }

  move(xDir, yDir) {
    var newX = this.x + xDir;
    var newY = this.y + yDir;
    var newPosition = {'left': newX, 'top': newY};
    this.node.css(newPosition);
    this.x = newX;
    this.y = newY;
  }
}
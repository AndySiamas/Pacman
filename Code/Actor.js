class Actor extends Time {
  constructor(className, speed = 20) {
    super();
    this.speed = speed;
    this.node = Sprites.createSprite(className);
    this.x = parseInt(this.node.css('left'));
    this.y = parseInt(this.node.css('top'));
    this.targetX = this.x;
    this.targetY = this.y;
    this.init();
  }

  init() {
    this.onEveryFrame(()=> { this.checkForInput() });
  }

  move(xDir = 0, yDir = 0) {
    var newX = this.x + xDir;
    var newY = this.y + yDir;
    var newPosition = {'left': newX, 'top': newY};
    this.node.css(newPosition);
    this.x = newX;
    this.y = newY;
  }

  checkForInput() {
    if (Input.upKeyDown) {
      this.move(0, -20);
    }
    else if (Input.downKeyDown) {
      this.move(0, 20);
    }

    if (Input.leftKeyDown) {
      this.move(-20, 0);
    }
    else if (Input.rightKeyDown) {
      this.move(20, 0);
    }
  }
}
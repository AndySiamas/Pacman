class Actor extends Entity {
  constructor(className, speed = 30) {
    super(className);
    this.speed = speed;
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
      this.move(0, -this.speed);
    }
    else if (Input.downKeyDown) {
      this.move(0, this.speed);
    }

    if (Input.leftKeyDown) {
      this.move(-this.speed, 0);
    }
    else if (Input.rightKeyDown) {
      this.move(this.speed, 0);
    }
  }
}
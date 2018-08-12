var _Input = function() {
  // Key Downs
  this.upKeyDown = false;
  this.downKeyDown = false;
  this.leftKeyDown = false;
  this.rightKeyDown = false;
    
  // Key Codes
  // Arrow key codes
  this.upKey = 38;
  this.downKey = 40;
  this.leftKey = 37;
  this.rightKey = 39;
    
  // WASD key codes
  this.wKey = 87;
  this.sKey = 83;
  this.aKey = 65;
  this.dKey = 68;

  this.createKeyBindings();
}

_Input.prototype.createKeyBindings = function() {
    const input = this;

    $('html').keydown(function(event) {
      let keyPressed = event.keyCode;

      if (keyPressed === input.upKey || keyPressed === input.wKey) {
        input.upKeyDown = true;
      }
      else if (keyPressed === input.downKey || keyPressed === input.sKey) {
        input.downKeyDown = true;
      }

      if (keyPressed === input.leftKey || keyPressed === input.aKey) {
        input.leftKeyDown = true;
      }
      else if (keyPressed === input.rightKey || keyPressed === input.dKey) {
        input.rightKeyDown = true;
      }
    });

    $('html').keyup(function(event) {
      let keyReleased = event.keyCode;

      if (keyReleased === input.upKey || keyReleased === input.wKey) {
        input.upKeyDown = false;
      }
      else if (keyReleased === input.downKey || keyReleased === input.sKey) {
        input.downKeyDown = false;
      }

      if (keyReleased === input.leftKey || keyReleased === input.aKey) {
        input.leftKeyDown = false;
      }
      else if (keyReleased === input.rightKey || keyReleased === input.dKey) {
        input.rightKeyDown = false;
      }
  });
}

var Input = new _Input();
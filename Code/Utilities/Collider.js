class Collider {
  constructor(color, width, height, startX, startY) {
    this.color = color;
    this.width = width;
    this.height = height;
    this.x = startX;
    this.y = startY;
    this.drawCollider();
  }

  getCoordinates() {
    var leftBorderX = this.x;
    var rightBorderX = this.x + this.width;
    var topBorderY = this.y;
    var bottomBorderY = this.y + this.height;
    return {leftX: leftBorderX, rightX: rightBorderX, topY: topBorderY, bottomY: bottomBorderY};
  }

  drawCollider() {
    var canvas = document.getElementById('MyCanvas');
    var context = canvas.getContext('2d');
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.fillStyle = this.color;
    context.fill();
    context.stroke();
  }

  isCollidingWith(other) {
    var myLoc = this.getCoordinates();
    var otherLoc = other.getCoordinates();
    var isInXPlane = isInRange(myLoc.leftX, otherLoc.leftX, otherLoc.rightX) ||  
                     isInRange(myLoc.rightX, otherLoc.leftX, otherLoc.rightX);
    var isInYPlane = isInRange(myLoc.topY, otherLoc.topY, otherLoc.bottomY) ||  
                     isInRange(myLoc.bottomY, otherLoc.topY, otherLoc.bottomY);
    return isInXPlane && isInYPlane;
  }
}

$(document).ready(function() {
  var colliderOne = new Collider('red', 20, 20, 20, 40);
  var colliderTwo = new Collider('blue', 20, 20, 41, 30);
  console.log(colliderOne.isCollidingWith(colliderTwo));
});
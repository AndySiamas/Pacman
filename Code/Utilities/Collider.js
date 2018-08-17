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

    const isHittingLeftBorder   =  isInRange(myLoc.leftX, otherLoc.leftX, otherLoc.rightX, () => console.log('LEFT'));

    const isHittingRightBorder  =  isInRange(myLoc.rightX, otherLoc.leftX, otherLoc.rightX, () => console.log('RIGHT')); 

    const isHittingTopBorder    =  isInRange(myLoc.topY, otherLoc.topY, otherLoc.bottomY, () => console.log('TOP'));

    const isHittingBottomBorder =  isInRange(myLoc.bottomY, otherLoc.topY, otherLoc.bottomY, () => console.log('BOTTOM'));

    var isInXPlane = isHittingLeftBorder ||  isHittingRightBorder;
    var isInYPlane = isHittingTopBorder  ||  isHittingBottomBorder;

    return (isInXPlane && isInYPlane);
  }
}

$(document).ready(function() {
  var colliderOne = new Collider('red', 20, 20, 55, 10);
  var colliderTwo = new Collider('blue', 20, 20, 40, 30);
  console.log(colliderOne.isCollidingWith(colliderTwo));
});
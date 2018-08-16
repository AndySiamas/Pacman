class Collider {
  constructor(radius, startX, startY) {
    this.radius = radius;
    this.x = startX;
    this.y = startY;
    this.drawCollider();
  }

  drawCollider() {
    var canvas = document.getElementById('MyCanvas');
    var context = canvas.getContext('2d');
    
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
  }

  isCollidingWith(otherCollider) {
    var combinedRadii = this.radius + otherCollider.radius;
    var positionOne = [this.x, this.y];
    var positionTwo = [otherCollider.x, otherCollider.y];
    var distanceBetweenColliders = getDistance(positionOne, positionTwo);
    return (distanceBetweenColliders < combinedRadii);
  }
}

$(document).ready(function() {
  var colliderOne = new Collider(50, 100, 100);
  var colliderTwo = new Collider(50, 100, 199);
  console.log(colliderOne.isCollidingWith(colliderTwo));
});
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
}

$(document).ready(function() {
  var colliderOne = new Collider(50, 100, 100);
  var colliderTwo = new Collider(50, 300, 100);
});
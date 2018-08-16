class Entity extends Time {
  constructor(className, hasCollider) {
    super();
    this.node = Sprites.createSprite(className);
    this.x = parseInt(this.node.css('left'));
    this.y = parseInt(this.node.css('top'));
    console.log(this.node.css('height'));
    if (hasCollider) this.attachCollider;
  }

  attachCollider() {
    
  }
}
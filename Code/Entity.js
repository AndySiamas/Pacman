class Entity extends Time {
  constructor(className, hasCollider) {
    super();
    this.node = Sprites.createSprite(className);
    this.x = parseInt(this.node.css('left'));
    this.y = parseInt(this.node.css('top'));
    this._width = parseInt(this.node.css('width'));
    this._height = parseInt(this.node.css('height'));
    if (hasCollider) this.attachCollider;
  }

  attachCollider() {
    
  }
}
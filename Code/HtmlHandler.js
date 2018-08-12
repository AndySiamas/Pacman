class HtmlHandler {
  constructor(){}
  
  static append(className) {
    var sprite = Sprites[className];
    $('.Game').append(sprite.node);
    $(`#${sprite.class}`).css('top', 100);
    $(`#${sprite.class}`).css('left', 100);
    return $(`#${sprite.class}`);
  }
}
class _HtmlHandler {
  constructor(){}
  
  append(className, node = 'Level', x = 100, y = 100) {
    var sprite = Sprites[className];
    $(`.${node}`).append(sprite.node);
    $(`#${sprite.class}`).css('left', x);
    $(`#${sprite.class}`).css('top', y);
    return $(`#${sprite.class}`);
  }

  constructMap(matrix) {
    let currentX = 100;
    let currentY = 100;
    var htmlhandler = this;

    matrix.forEach(function (row) {
      var line = $('<div class="row">');

      row.forEach(function (column) {
        if (column === 1) {
          var block = $(Sprites.block.node);
          block.css('left', currentX);
          block.css('top', currentY);
          line.append(block);
        }
        currentX += 170;
      });

      $('.Level').append(line);
      currentX = 100;
      currentY += 180;
    });
  }
}

var HtmlHandler = new _HtmlHandler();
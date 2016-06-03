exports.drawStar = function(star) {

  var drawTemp = '';
  for (var i = star; i > 0; i=i-2) {
    for (var j = 0; j < star; j++) {
      if ((star - i) / 2 > j || j > (star - 1 - (star - i) / 2)) {
        drawTemp = drawTemp + ' ';
      }
      else {
        drawTemp = drawTemp + '*';
      }
    }
    console.log(drawTemp);
    drawTemp = '';
  }
}

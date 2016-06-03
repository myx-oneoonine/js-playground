exports.squareOverlab = function(req, res) {

  console.log(req.body);
  console.log("squareALeft:"+ req.body.squareALeft);
  console.log("squareARight:"+ req.body.squareARight);
  console.log("squareATop:"+ req.body.squareATop);
  console.log("squareABottom:"+ req.body.squareABottom);
  console.log("squareBLeft:"+ req.body.squareBLeft);
  console.log("squareBRight:"+ req.body.squareBRight);
  console.log("squareBTop:"+ req.body.squareBTop);
  console.log("squareBBottom:"+ req.body.squareBBottom);

  var left = 0, right = 0, top = 0, bottom = 0 ,area = 0;

  function horizonOverlab() {
    if (req.body.squareBLeft <= req.body.squareALeft && req.body.squareALeft <= req.body.squareBRight) {
      left = req.body.squareALeft;
    }
    else if (req.body.squareALeft <= req.body.squareBLeft && req.body.squareBLeft <= req.body.squareARight) {
      left = req.body.squareBLeft;
    }

    if (req.body.squareBLeft <= req.body.squareARight && req.body.squareARight <= req.body.squareBRight) {
      right = req.body.squareARight;
    }
    else if (req.body.squareALeft <= req.body.squareBRight && req.body.squareBRight <= req.body.squareARight) {
      right = req.body.squareARight;
    }
  }

  function verticalOverlab() {
    if (req.body.squareBBottom <= req.body.squareABottom && req.body.squareABottom <= req.body.squareBTop) {
      bottom = req.body.squareABottom;
    }
    else if (req.body.squareABottom <= req.body.squareBBottom && req.body.squareBBottom <= req.body.squareATop) {
      bottom = req.body.squareBBottom;
      top = req.body.squareATop;
    }

    if (req.body.squareBBottom <= req.body.squareATop && req.body.squareATop <= req.body.squareBTop) {
      top = req.body.squareATop;
    }
    else if (req.body.squareABottom <= req.body.squareBTop && req.body.squareBTop <= req.body.squareATop) {
      top = req.body.squareBTop;
    }
  }

  verticalOverlab();
  horizonOverlab();

  console.log('right:'+ right + '\nleft:' + left + '\ntop:' + top + '\nbottom:' + bottom);
  area = (right - left) * (top - bottom);

  res.json({
    'overlab': area
  });
}

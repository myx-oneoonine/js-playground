exports.squareOverlab = function(req, res) {

  console.log(req.body);
  console.log("squareALeft:"+ req.body.squareA.left);
  console.log("squareARight:"+ req.body.squareA.right);
  console.log("squareATop:"+ req.body.squareA.top);
  console.log("squareABottom:"+ req.body.squareA.bottom);
  console.log("squareBLeft:"+ req.body.squareB.left);
  console.log("squareBRight:"+ req.body.squareB.right);
  console.log("squareBTop:"+ req.body.squareB.top);
  console.log("squareBBottom:"+ req.body.squareB.bottom);

  var tmpLeft = 0, tmpRight = 0, tmpTop = 0, tmpBottom = 0 ,area = 0;
  function square(left, right, top, bottom) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
  }
  var squareA = new square(req.body.squareA.left, req.body.squareA.right, req.body.squareA.top, req.body.squareA.bottom);
  var squareB = new square(req.body.squareB.left, req.body.squareB.right, req.body.squareB.top, req.body.squareB.bottom);
  // console.log(">>>>>>>>>>>>>>>>>>>>>>>>");
  // console.log("squareALeft:"+ squareA.left);
  // console.log("squareARight:"+ squareA.right);
  // console.log("squareATop:"+ squareA.top);
  // console.log("squareABottom:"+ squareA.bottom);
  // console.log("squareBLeft:"+ squareB.left);
  // console.log("squareBRight:"+ squareB.right);
  // console.log("squareBTop:"+ squareB.top);
  // console.log("squareBBottom:"+ squareB.bottom);

  function horizonOverlab() {
    if (squareB.left <= squareA.left && squareA.left <= squareB.right) {
      tmpLeft = squareA.left;
    }
    else if (squareA.left <= squareB.left && squareB.left <= squareA.right) {
      tmpLeft = squareB.left;
    }

    if (squareB.left <= squareA.right && squareA.right <= squareB.right) {
      tmpRight = squareA.right;
    }
    else if (squareA.left <= squareB.right && squareB.right <= squareA.right) {
      tmpRight = squareB.right;
    }
  }

  function verticalOverlab() {
    if (squareB.bottom <= squareA.bottom && squareA.bottom <= squareB.top) {
      tmpBottom = squareA.bottom;
    }
    else if (squareA.bottom <= squareB.bottom && squareB.bottom <= squareA.top) {
      tmpBottom = squareB.bottom;
    }

    if (squareB.bottom <= squareA.top && squareA.top <= squareB.top) {
      tmpTop = squareA.top;
    }
    else if (squareA.bottom <= squareB.top && squareB.top <= squareA.top) {
      tmpTop = squareB.top;
    }
  }

  verticalOverlab();
  horizonOverlab();

  console.log('right:'+ tmpRight + '\nleft:' + tmpLeft + '\ntop:' + tmpTop + '\nbottom:' + tmpBottom);
  area = (tmpRight - tmpLeft) * (tmpTop - tmpBottom);

  res.json({
    'overlab': area
  });
}

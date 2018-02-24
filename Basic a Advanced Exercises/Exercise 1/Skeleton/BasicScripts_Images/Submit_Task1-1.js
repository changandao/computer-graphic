function drawPixelwiseCircle(canvas) {
  var context = canvas.getContext("2d");
  var img = context.createImageData(200, 200);

  //TODO 1.1a)      Copy the code from Basic.js
  //                and modify it to create a 
  //                circle.



  context.putImageData(img, 0, 0);
}

function drawContourCircle(canvas) {
  var context = canvas.getContext("2d");
  var img = context.createImageData(200, 200);

  //TODO 1.1b)      Copy your code from above
  //                and extend it to receive a
  //                contour around the circle.



  context.putImageData(img, 0, 0);
}

function drawSmoothCircle(canvas) {
  var context = canvas.getContext("2d");
  var img = context.createImageData(200, 200);

  //TODO 1.1c)      Copy your code from above
  //                and extend it to get rid
  //                of the aliasing effects at
  //                the border.



  context.putImageData(img, 0, 0);
}

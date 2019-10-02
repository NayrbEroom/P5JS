function setup() {
  curWinWidth = windowWidth;
  curWinHeight = windowHeight;
  createCanvas(windowWidth, windowHeight);
  myBlob = new Blob(200, 200, 200);
}

function draw() {
  if (curWinWidth !== windowWidth || curWinHeight !== windowHeight) {
    resizeCanvas(windowWidth, windowHeight);
    //console.log("resized");
  }
  myBlob.show();




  background(51);
}

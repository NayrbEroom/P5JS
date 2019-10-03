function setup() {
  curWinWidth = windowWidth;
  curWinHeight = windowHeight;
  createCanvas(windowWidth, windowHeight);
  myBlob = new Blob(250, 250, 200);
}

function draw() {
  background(51);
  /*if (curWinWidth !== windowWidth || curWinHeight !== windowHeight) {
    resizeCanvas(windowWidth, windowHeight);
    //console.log("resized");
  }*/
  myBlob.show();





}

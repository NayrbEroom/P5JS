
blobs = [];

function setup() {
  curWinWidth = windowWidth;
  curWinHeight = windowHeight;
  createCanvas(windowWidth, windowHeight);
  myBlob = new Blob(250, 250, 200);
  for (i = 0; i < 100; i++) {
    var x = random(-width, width);
    var y = random(-height, height);
    var r = random(10, 25);
    blobs[i] = new Blob(x, y, r);
  }
}

function draw() {
  background(51);
  /*if (curWinWidth !== windowWidth || curWinHeight !== windowHeight) {
    resizeCanvas(windowWidth, windowHeight);
    //console.log("resized");
  }*/
  myBlob.show();
  myBlob.move();

  for (i = 0; i < 100; i++) {
    blobs[i].show();
  }





}

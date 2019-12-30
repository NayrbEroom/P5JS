
var d = day();
var h = hour();
var m = minute();
var s = second();

function setup() {
    createCanvas(windowWidth, windowHeight);
    console.log("Start success");


    console.log("I've received the time");


}

function draw() {
  background(51);
  stroke(0);
  text(d + ':' + h + ':' + m + ':' + s, 10, 10);
  let midScreenX = windowWidth/2;
  let midScreenY = windowHeight/2;

  noFill();
  stroke(255, 102, 204);
  strokeWeight(10);
  let dayArc = arc(midScreenX, midScreenY, 50, 50, 0, 0);
  noFill();
  stroke(102, 255, 51);
  strokeWeight(10);
  let hourArc = arc(midScreenX, midScreenY, 100, 100, 0, 0);
  noFill();
  stroke(102, 102, 255);
  strokeWeight(10);
  let minuteArc = arc(midScreenX, midScreenY, 150, 150, 0, 0);
  noFill();
  stroke(255, 80, 80);
  strokeWeight(10);
  let secondArc = arc(midScreenX, midScreenY, 200, 200, 0, 0);



}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log("Resized");
}

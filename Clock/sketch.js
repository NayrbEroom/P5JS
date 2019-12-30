


function setup() {
    createCanvas(windowWidth, windowHeight);
    console.log("Start success");
    let d = day();
    let h = hour();
    let m = minute();
    let s = second();

    console.log("I've received the time");
    

}

function draw() {
  background(51);

  let midScreenX = windowWidth/2;
  let midScreenY = windowHeight/2;
  let dayArc = arc(midScreenX, midScreenY, 50, 50, 0, 0);
  nofill();
  let hourArc = arc(midScreenX, midScreenY, 100, 100, 0, 0);
  nofill();
  let minuteArc = arc(midScreenX, midScreenY, 150, 150, 0, 0);
  nofill();
  let secondArc = arc(midScreenX, midScreenY, 200, 200, 0, 0);
  nofill();


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log("Resized");
}

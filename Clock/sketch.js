let dayArc = arc();
let hourArc = arc();
let minuteArc = arc();
let secondArc = arc();


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
  arc(250, 250, 50, 50, 0, 0);



}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log("Resized");
}

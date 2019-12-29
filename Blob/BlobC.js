function Blob(x, y, r) {
  this.pos = createVector(x, y);
  this.r = (Math.floor(Math.random()));
  this.vel = createVector(0,0);

  //moves blob
  this.update = function() {
    var newVel = createVector(mouseX, mouseY);
    this.pos = newVel;
  }

  //eats food
  this.eat = function() {

  }

  this.show = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }


}

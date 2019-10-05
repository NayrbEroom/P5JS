

//declare class blob
//gives x y position and an r for radius/size
function Blob(x, y, r) {


  this.pos = createVector(x, y);
  this.vel = createVector(0,0);
  this.r = r;

  this.move = function() {
    this.pos.x = this.vel.x;
    this.pos.y = this.vel.y;
  }

  this.eat = function() {


  }

  this.show = function() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }

}

function Particle(x,y) {
  this.pos = createVector(x, y);
  this.prev = createVector(x, y);
  // initial value for vel
  // this.vel = createVector(-1, 0.2);
  // this.vel = createVector(); // p5.Vector.random2D();
  this.vel = p5.Vector.random2D();
  // this.vel.setMag(random(2, 5))
  this.acc = createVector();

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function() {
    stroke(255, 25);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);

    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  }


  this.attracted = function(target) {
    // below is what we really want to do, but since subtract function isn't suported in javascript, we use p5's subtract function
    // so that we can keep subtracting the distance between two particles
    // var dir = target - this.pos;

    var force = p5.Vector.sub(target, this.pos);
    var dsquared = force.magSq();
    dsquared = constrain(dsquared, 5, 50);
    var G = 2;
    var strength = G / dsquared;
    force.setMag(strength);
    this.acc.add(force);
  }

}

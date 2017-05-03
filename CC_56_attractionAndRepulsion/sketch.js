var attractors = [];
var particles = [];

function setup(){
  createCanvas(800, 800);
  for (var i = 0; i < 100; i++) {
    particles.push(new Particle(random(width), random(height)));
    // particles.push(new Particle(200, 200));
    background(150, 0, 255);
  }

  // for (var i = 0; i < 10; i++) {
  //   attractors.push(createVector(random(width), random(height)));
  // }

}

function mousePressed() {
  attractors.push(createVector(mouseX, mouseY));
}

function draw(){
  stroke(255);
  strokeWeight(4);


  for (var i = 0; i < attractors.length; i++) {
    if (i % 2 ==0) {
    stroke(0, 255, 0);
  } else {
    stroke(255, 255, 0);
  }
    point(attractors[i].x, attractors[i].y);
  }
  for (var i = 0; i < particles.length; i++) {
    var particle = particles[i];
    for (var j = 0; j < attractors.length; j++){
      particle.attracted(attractors[j]);
    }
    particle.update();
    particle.show();
  }
}

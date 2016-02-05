
function Particles (startX, startY){
  this.x = startX;
  this.y = startY;
  this.velocity = {
    x: 0,
    y: 0
  }
}
 var particles = [];
  for (var i=0; i<100; i++){
    var p = new Particles(i, (Math.random()*500));
    p.velocity.x = p.x;
    p.velocity.y = p.y;
    particles.push(p);

  }
  console.log(particles);

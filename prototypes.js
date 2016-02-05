
var time = 0;
var gravity = 0.5;

function Particles (startX, startY){
  this.x = startX;
  this.y = startY;
  // this.velocity = {
  //   x: 0,
  //   y: 0
  // }
}
var getVelocity

Particles.prototype = {
  getVelocity: function (){
    return time * gravity;
  },
  move: function(){
    this.y += this.getVelocity();
    if (y >= 500) {
      console.log ("bottom");
    }
  }
}

 var particles = [];
  for (var i=0; i<100; i++){
    var p = new Particles(i, (Math.random()*500));
    particles.push(p);
  }

setInterval(function(){
  time += 1;
  particles.forEach(function(p){
     p.move()
     // our stopping point

  }particles.filter (value){
    return value
  })


}, 100);
    move()
  console.log(particles);

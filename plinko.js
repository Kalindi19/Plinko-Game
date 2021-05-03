class Plinko{
    constructor(x,y){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        'mass':15000,
    }
    this.body = Bodies.rectangle(x, y,50,50,options);
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);
    }
  
    display(){
    for(var j=40; j <=width; j=j+50){
        plinko.push(new Plinko(j,75))
        }

    for(var j=15;j<=width-10;j=j+50){
        plinkos.push(new Plinko(j,175))
    }
    
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      pop();
    }
  }
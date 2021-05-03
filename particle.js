class Particle{
    constructor(x,y){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
    }
    this.body=Bodies.circle(x,y,this.r,options);
    this.color=color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body)
    }

    display(){
        var angle = this.body.angle;
        if(frameCount%60===0){
            particles.push(new Particle(random(width/2-10,width/2+10),10,10))
        }
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop(); 
    }


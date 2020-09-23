class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restituition:0.3,
            friction:0.5,
            density:1.2,
        }

        this.body = Matter.Bodies.circle(x,y,radius,options,40);
        this.radius = radius;
        World.add(world,this.body);
        
    }

    display(){
      var pos = this.body.position
      push();
      fill(251, 39, 251);
      ellipseMode(CENTER);
      ellipse(pos.x,pos.y,this.radius);
      pop();
    }
}

class CannonBall{

    constructor(x,y){
        var options={
            isStatic:true,
            restituation:0.8,
            friction:1.0,
            density:1.0
        };
        this.radius = 40;
        this.body = Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
        this.image = loadImage("./assets/cannonball.png");
    };
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        image(this.image,0,0,this.radius,this.radius);
        imageMode(CENTER);
        pop();
    };
    shoot(){
        var velocity = p5.Vector.fromAngle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y});

    };
};

class Cannon{

    constructor(x,y,width,height,angle){
        
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.cannon_head = loadImage("./assets/CANON.png");
        this.cannon_base = loadImage("./assets/cannon_base.png");
    }
    display(){
    
        if(keyIsDown(LEFT_ARROW)&& this.angle>-30){
            this.angle-=1
        }
        if(keyIsDown(RIGHT_ARROW)&& this.angle<70){
            this.angle+=1
        }
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.cannon_head,0,0,this.width,this.height);
        pop();
        image(this.cannon_base,70,20,200,200);
        
    }

}
class Ball {
    constructor(x,y,r){
        var option = {density:1};
        this.body = Bodies.circle(x,y,r,option);
        World.add(world,this.body)
        this.x = x;
        this.y = y;
        this.r = r;
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        rotate(this.body.angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)
        pop();
    }
}
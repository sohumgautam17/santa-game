class Snow 
{
constructor(x, y, r) {
var options = {
isStatic: false
}
this.radius=5;
this.body = Bodies.circle(x,y,this.radius, options);
World.add(world, this.body);
}

display() {
    
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    noStroke();
    fill("white");
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius);
    pop();
}
}


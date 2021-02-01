class Stone
{
    constructor(x,y,radius)
    {
        var stone_options={
            isStatic:false,
            restitution:0, 
            friction:1,
            density: 1.2
           
        }
        this.body=Bodies.circle(x,y,radius/2,stone_options);
        this.image=loadImage("stone.png");
        this.radius=radius;
        World.add(world,this.body);
    }

    display()
    {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
        pop();
    }
}
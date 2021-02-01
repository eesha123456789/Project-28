class Tree
{
    constructor(x,y,width,height)
    {
        var tree_options={
            isStatic:true,
            restitution:0, 
            friction:1,
            density: 0
           
        }
        this.body=Bodies.rectangle(x,y,width,height,tree_options);
        this.image=loadImage("tree.png");
        this.width=width;
        this.height=height;
        //World.add(world,this.body);
    }

    display()
    {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER)
        image(this.image,0,0,this.width, this.height)
        pop();
    }
}
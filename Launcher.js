class Launcher{
    constructor(bodyA, pointB){
        var launch_options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: .004,
            length: 10,
          }
          this.pointB=pointB
          this.chain=Constraint.create(launch_options)
          World.add(world,this.chain)
        }
    display(){
        if(this.chain.bodyA!=null){
        var pointA=this.chain.bodyA.position;
        var pointB=this.pointB
        push();
        stroke(48,22,8)
        strokeWeight(3)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        pop();
        }
        
    }
    fly(){
        this.chain.bodyA=null
    }
    attach(bodyC){
        this.chain.bodyA=bodyC
    }
}
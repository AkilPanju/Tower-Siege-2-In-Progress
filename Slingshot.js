class SlingShot
{
    constructor(body1, point2){
        
        var options = {
            bodyA: body1,
            pointB:point2,
            stiffness: 0.5,
            length: 20
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    fly(){
        this.rope.bodyA = null;
    }
    display()
    {
           if(this.rope.bodyA)
        {
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
        }
    
    }

    keyPressed()
    {
        if(keyCode === 32)
        {
            slingshot.attach(polygon);
        }
    }

}
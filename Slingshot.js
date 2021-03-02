class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        var sling1,sling2,sling3;
        
    this.sling1=loadImage('sprites/sling1.png')
    this.sling2=loadImage('sprites/sling2.png')
    this.sling3=loadImage('sprites/sling3.png')


        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
      
        image(this.sling1,180,20)
       image(this.sling2,150,20)
    


        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            image(this.sling3,pointA.x-30,pointA.y,15,15)
            line(pointA.x+10, pointA.y, pointB.x+20, pointB.y);
            line(pointA.x-30, pointA.y, pointB.x-15, pointB.y);
        }  

      
    }
   
    
}
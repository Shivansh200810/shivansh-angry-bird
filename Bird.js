class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    var options={
      'stiffness':0.04,
      'length':10


    }
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}

class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
     //this.image = loadImage("sprites/wood1.png");
     this.visibility = 255;
    }
    display(){
      if(this.body.speed > 3) {
        super.display();
      }
      else{
        push();
        this.visibility = this.visibilty - 5;
        tint(255,this.visibility);
        //image(this.image,this.body.position.x,this.body.position.y,this.height,this.width);
        pop();

        
      }
    }
  };
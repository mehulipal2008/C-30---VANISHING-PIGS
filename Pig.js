class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility = 255;
  }
display(){
  console.log(this.body.speed);
  if(this.body.speed<3){
     // super.display is used to override the function
     //override - making change in what we have defined earlier
  super.display();
  }
  else {
    World.remove(world, this.body);
    push();
    //for slow disappearance of pigs
    this.Visibility = this.Visibility-5;
    // for transparency
    tint(255, this.Visibility);
    //replacing the body with just an image
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
  }

}
};
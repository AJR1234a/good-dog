class Food {
    constructor(foodStock,lastFed){








    }

    getFoodStocks(){


    }

   
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    if (this.foodStock!=0){

    for(var i=0;i<this.foodStock ; i++){
            if(i%10==0){
                x=80;
                y= y+50;
            }
            image(this.image,x,y,50,50);
            x=x+30;
    }
    }
  }
}
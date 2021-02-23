
class BlockII {
    
    constructor (x,y) {

        var options= {restitution:0.8 , friction:1.0 , density:1.0 }

        this.body=Bodies.rectangle (x,y,30,30,options);
        this.width=30;
        this.height=30;
        World.add (world,this.body);

    }

    display () {

        var pos=this.body.position;
        rectMode (CENTER);
        fill ("orange");
        rect (pos.x,pos.y,this.width,this.height);

    }

}

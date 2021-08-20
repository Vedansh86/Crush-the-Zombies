class Stone
{
    constructor(x, y){
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
            isStatic:true
        };
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index], 0, this.boatPosition, this.width, this.height);
        noTint();
        pop()
    }
}
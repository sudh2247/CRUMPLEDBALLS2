class Paper{
    constructor(x, y) {
        var options = {
            isStatic: false, 
            restitution: 0.3, 
            friction: 0.5, 
            density: 1.2
        }
        this.radius = 70;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x, y, 25, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        imageMode(RADIUS);
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}
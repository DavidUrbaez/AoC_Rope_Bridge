var scl = 20;
var knots = [];
var rope_len = 9;
var stop = false;
var dx = 0;
var dy = 1;

function setup() {
    createCanvas(400, 400);
    head = new Knot(0.5);
    for (let i = 0; i < rope_len; i++) {
        knots[i] = new Knot((0.5) * (i / rope_len) + 0.5);
    }
    frameRate(1);
}

function draw() {

    background(51);
    head.dir(dx, dy);
    console.log(head.xspeed);
    head.update();
    head.show();

    knots[0].calc_speed(head);
    knots[0].update();
    knots[0].show();

    for (let i = 1; i < rope_len; i++) {
        knots[i].calc_speed(knots[i - 1]);
        knots[i].update();
        knots[i].show();
    }

}



function keyPressed() {
    stop = true
    if (keyCode === UP_ARROW) {
        dx = 0;
        dy = 1;
    } else if (keyCode === DOWN_ARROW) {
        dx = 0;
        dy = -1;
    } else if (keyCode === RIGHT_ARROW) {
        dx = 1;
        dy = 0;
    } else if (keyCode === LEFT_ARROW) {
        dx = -1;
        dy = 0;
    }
    stop = false
}

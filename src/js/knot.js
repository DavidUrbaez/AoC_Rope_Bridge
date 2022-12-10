// Constructor
class Knot {
    constructor(alpha) {
        this.alpha = alpha
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
    }

    calc_speed(other) {
        var Fx = (other.x - this.x) / 2;
        var Fy = (other.y - this.y) / 2;

        if (abs(Fx) == 1 || abs(Fy) >= 1) {

            this.xspeed = constrain(20 * Fx, -1, 1);
            this.yspeed = constrain(20 * Fy, -1, 1);
            console.log(Fx);
        } else {

            this.xspeed = 0;
            this.yspeed = 0;

        }
    }

    update() {

        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;

    }

    show() {
        fill(this.alpha * 87, this.alpha * 61, this.alpha * 48);
        rect(scl * this.x, height - scl - scl * this.y, scl);
    }
    dir(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }
}
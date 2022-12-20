import p5 from "p5";
import Common from "../Common";

class Bullet {
	p: p5;
	pos: p5.Vector;
	vel: p5.Vector;
	speed: number;
	offset: number;

	constructor(p: p5, pos: p5.Vector, offset: number) {
		this.p = p;
		this.pos = pos;
		this.vel = p.createVector(this.p.random(-2.5, 2.5), -Common.BULLET_SPEED);
		this.offset = offset;
	}

	render() {
		this.p.push();

		this.p.rectMode(this.p.CENTER);
		this.p.fill("purple");
		this.p.rect(this.pos.x + this.offset, this.pos.y, 10, 10);

		this.p.pop();
	}

	tick() {
		this.pos.add(this.vel);
	}
}

export default Bullet;
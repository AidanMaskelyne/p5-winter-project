import p5 from "p5";
import Player from "./Player";

class Bullet {
	p: p5;
	x: number;
	y: number;

	constructor(p: p5, x: number, y: number) {
		this.p = p;
	}

	/// This must be called in order to spawn a bullet.
	/// Starting speed is always 1.

	render() {
		this.p.fill("purple");
		this.p.rect(this.x, this.y, 10, 10);
	}
}

export default Bullet;
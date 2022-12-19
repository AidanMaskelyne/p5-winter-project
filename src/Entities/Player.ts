import p5 from "p5";

import Bullet from "./Bullet";

const PLAYER_WIDTH = 30
const PLAYER_HEIGHT = 75;

/// For player objects, the `update()` method should be called before the `render()` method.
/// This is because render does not change the player's position, it just renderes based on the
/// encapsulated x and y coords. The update function, however, only modified the position.
class Player {
	p: p5;
	x: number;
	y: number;
	isHit: boolean = false;
	bullets: Array<Bullet> = [];

	constructor(p: p5) {
		this.p = p;
		this.y = this.p.height - (100 + PLAYER_HEIGHT); // Will always position the player just above the bottom line
		this.x = this.p.width / 2;
	}

	shoot() {
		this.bullets.push(new Bullet(this.p, this.x, this.y));
		console.log(this.bullets);
		console.log(this.bullets[0]);

	}

	// TODO: Add player control.
	update() {

	}

	render() {
		this.p.fill("red");
		this.p.rect(this.x, this.y, PLAYER_WIDTH, PLAYER_HEIGHT);

		for (let i = 0; i < this.bullets.length; i++) {
			this.bullets[i].render();
			// console.log(`i = ${i}`);
		}
	}
}

export default Player;
import p5 from "p5";

import Common from "../Common";
import Bullet from "./Bullet";

class Player {
	p: p5;
	direction: number;
	pos: p5.Vector;
	vel: p5.Vector;
	speed: number;
	bullets: Array<Bullet> = [];

	constructor(p: p5, speed: number) {
		this.p = p;

		this.pos = p.createVector(this.p.width / 2, this.p.height - (100 + Common.PLAYER_HEIGHT/2));
		this.vel = p.createVector(0, 0);

		this.speed = speed * Common.SPEED_SCALAR;
	}

	render() {
		this.p.push();

		this.p.translate(this.pos.x, this.pos.y);

		if (this.p.keyIsDown(Common.LEFT_ARROW)) this.direction = 1;
		if (this.p.keyIsDown(Common.RIGHT_ARROW)) this.direction = -1;

		this.p.fill("red");
		this.p.rectMode(this.p.CENTER);
		this.p.rect(0, 0, Common.PLAYER_WIDTH, Common.PLAYER_HEIGHT);

		this.p.pop();
	}

	tick() {
		this.vel.add(Common.GRAVITY);
		this.vel.x *= 1 - Common.FRICTION;
		this.pos.add(this.vel);

		this.pos.y = this.p.height - (100 + Common.PLAYER_HEIGHT/2);

		// Basic LEFT <-> RIGHT movement with arrow keys.
		// TODO: Could maybe add A and D as an alternative?
		if (this.p.keyIsDown(Common.LEFT_ARROW)) this.vel.x -= this.speed;
		if (this.p.keyIsDown(Common.RIGHT_ARROW)) this.vel.x += this.speed;

		if (this.pos.x < Common.PLAYER_WIDTH/2) {
			this.pos.x = Common.PLAYER_WIDTH/2;
			this.vel.x = 0;
		} else if (this.pos.x > Common.CANVAS_WIDTH - Common.PLAYER_WIDTH/2) {
			this.pos.x = Common.CANVAS_WIDTH - Common.PLAYER_WIDTH/2;
			this.vel.x = 0;
		}

		for (let i = 0; i < this.bullets.length; i++) {

			// Cull the bullets that are no longer on screen
			if (this.bullets[i].pos.y < 0) {
				this.bullets.splice(i, 1);
				continue;
			}

			this.bullets[i].tick();
			this.bullets[i].render();
		}

		// Check for space button held to shoot
		if (this.p.keyIsDown(32)) {
			this.shoot();
		}
	}

	shoot() {
		let bulletPos = this.pos.copy().sub(0, Common.PLAYER_HEIGHT / 2);
		let bulletOffset = this.p.random((-Common.PLAYER_WIDTH/2) + 5, (Common.PLAYER_WIDTH/2) -5);

		this.bullets.push(new Bullet(this.p, bulletPos, bulletOffset));
	}
}

export default Player;
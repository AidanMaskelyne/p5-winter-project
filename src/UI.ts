import p5 from "p5";
import Player from "./Entities/Player";

class UI {
	p: p5;
	score: number;
	level: number;
	timer: number;
	font: p5.Font;

	constructor(p: p5, font: p5.Font) {
		this.p = p;
		this.score = 0;
		this.level = 0;
		this.timer = 0;
		this.font = font;
	}

	render() {
		this.p.textSize(18);
		this.p.textFont(this.font);

		this.p.fill(255)
		this.p.text(`Score: ${this.score}`, 25, 40, 200);

		this.p.colorMode(this.p.RGB);

		// console.info("Rendered UI");
	}

	updateScore(mod: number) {
		this.score + mod;

		console.info(`Score incremented by ${mod}`);
	}
}

export default UI;
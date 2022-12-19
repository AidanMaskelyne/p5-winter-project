import p5 from "p5";

class Level {
	p: p5;

	constructor(p: p5) {
		this.p = p;
	}

	render() {
		this.p.fill(255);

		/// The actual top border of rect will be at y = 100 from the bottom;
		this.p.rect(0, this.p.height - 100, this.p.width, 10);
		// console.info("Rendered level.");
	}
}

export default Level;
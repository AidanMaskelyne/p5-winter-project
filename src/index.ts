import p5 from "p5";

import Common from "./Common";
import UI from "./UI";
import Player from "./Entities/Player";
import Level from "./Level";

import "../styles/normalize.css"; // In order for the canvas to take up the entire window without borders
import "../styles/main.css"; // Disables scrolling on body element

let sketch = async function (p: p5) {
	let ui: UI;
	let player: Player;
	let level: Level;

	let font = await p.loadFont(Common.FONT);

	p.setup = function() {
		p.createCanvas(Common.CANVAS_WIDTH, Common.CANVAS_HEIGHT);
		p.angleMode(p.DEGREES);
		p.noStroke();
		p.frameRate(60);

		ui = new UI(p, font);
		player = new Player(p, 25);
		level = new Level(p);
	}

	p.draw = function() {
		p.clear(24, 24, 24, 1);

		p.background(24, 24, 24);
				
		level.render();

		ui.render();

		player.tick();
		player.render();
	}
}


let outSketch = new p5(sketch);
import p5 from "p5";

import UI from "./UI";
import Player from "./Entities/Player";
import Level from "./Level";

import "../styles/normalize.css"; // In order for the canvas to take up the entire window without borders
import "../styles/main.css"; // Disables scrolling on body element

const CANVAS_WIDTH: number = window.innerWidth;
const CANVAS_HEIGHT: number = window.innerHeight;

let sketch = async function (p: p5) {
	let ui: UI;
	let player: Player;
	let level: Level;

	/// Available fonts:
	/// 	- fonts/amiga4ever/amiga4ever.ttf	<-- More pixel-y retro font
	///		- fonts/Orbitron/Orbitron-VariableFont_wght.ttf		<-- More vector-y font
	///		- fonts/pixtech/pixtech.ttf		<-- Similar to amiga4ever.ttf
	let font = await p.loadFont("fonts/amiga4ever/amiga4ever.ttf");

	p.setup = function() {
		p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
		p.angleMode(p.DEGREES);
		p.noStroke();
		p.frameRate(60);

		ui = new UI(p, font);
		player = new Player(p);
		level = new Level(p);
		
	}

	p.draw = function() {
		p.background(24, 24, 24);
				
		level.render();
		ui.render();
		player.render();
	}

	p.keyPressed = function() {
		if (p.keyCode === 32) {
			player.shoot();
		}
	}
}


let outSketch = new p5(sketch);
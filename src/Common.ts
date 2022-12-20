import { Vector } from "p5";

const Common = {
	///  P5
	CANVAS_WIDTH: window.innerWidth,
	CANVAS_HEIGHT: window.innerHeight,
	FONT: "fonts/amiga4ever/amiga4ever.ttf",

	/// PLAYER
	PLAYER_WIDTH: 30,
	PLAYER_HEIGHT: 75,
	PLAYER_SPEED: 25,
	GRAVITY: new Vector(0, 1),
	SPEED_SCALAR: 0.5,
	FRICTION: 0.25,

	/// BULLET
	BULLET_SPEED: 50,

	// KEYS
	LEFT_ARROW: 37,
	RIGHT_ARROW: 39,
	SPACE: 32,
}

export default Common;
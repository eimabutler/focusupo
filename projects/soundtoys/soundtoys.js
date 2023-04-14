let env;
let osc;
function setup() {
	let cnv = createCanvas(500, 500);
	cnv.mousePressed(startOsc);

	env = new p5.Envelope(0, 0.08, 1, 0.0);
	osc = new p5.SinOsc();
	osc.amp(0.3);
}
function startOsc() {
	osc.start();
	env.play(osc);
}
function draw() {
	background(100);
	text('tap to play', 5, 20, width - 20);
	// let w = map(mouseX, 0, width, .5, 2000);
	// // w = constrain(w, 0, 1);
	// osc.freq(w);
	osc.freq(p5.Noise(pink));
	// text('osc freq: ' + w, 5, height - 20);
}
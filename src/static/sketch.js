var t = 0;
var W = 0;
dt = 1.0 / 365;
var Whistory = [0];
var thistory = [0];
var Wmax = 1.0;
var Wmin = -1.0;
function setup() {
  var canvasDiv = document.getElementById('simulation');
  var width = canvasDiv.offsetWidth;
  var canvas = createCanvas(width, 480);
  canvas.parent('simulation');
  stroke(153);
  fill(153);
}

function draw() {
    // Sets canvass to black
    background(0);
    // Resets all variables if t == 1.
    if(t > 1) {
        Whistory = [0];
        Wmax = 1.0;
        Wmin = -1.0;
        t = 0;
        W = 0;
        thistory = [0];
    }
    // Updates variables
    t = t + dt;
    dW = randomGaussian(0, sqrt(dt));
    W = W + dW;
    Whistory.push(W);
    thistory.push(t);
    Wmax = max(W, Wmax);
    Wmin = min(W, Wmin);
    // Draws line
    for(i = 1; i < Whistory.length; i++) {
        x1 = width * thistory[i - 1];
        x2 = width * thistory[i];
        y1 = 480 * (Whistory[i - 1] - Wmin) / (Wmax - Wmin);
        y2 = 480 * (Whistory[i] - Wmin) / (Wmax - Wmin);
        line(x1, y1, x2, y2);
    }
}

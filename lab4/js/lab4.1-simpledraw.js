var canvas = document.getElementById('canvas-element');
var context = canvas.getContext('2d');
// end of line is rounded
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 4;
var mousePressed = false;
var lastX, lastY;

function start() {

    //pageX- gets horizontal coordinate
    //pageY- gets vertical coordinate
    //offsetLeft- returns the left position (in pixels) relative to the left side the offsetParent element
    //offsetTop- returns the top position (in pixels) relative to the top of the offsetParent element
    canvas.onmousedown = function(e) {
        mousePressed = true;
        startDrawing(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, false);
    }

    canvas.onmousemove = function (e) {
        if (mousePressed) {
            startDrawing(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
        }
    }

    canvas.onmouseup = function (e) {
        mousePressed = false;
    }

      canvas.onmouseleave = function (e) {
        mousePressed = false;
    }
}

function startDrawing(x, y, Down) {
    if (Down) {
        context.beginPath();
        context.strokeStyle = 'blue';
        context.lineWidth = 4;
        context.moveTo(lastX, lastY);
        context.lineTo(x, y);
        context.closePath();
        context.stroke();
    }
    lastX = x; lastY = y;
}

function reset() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

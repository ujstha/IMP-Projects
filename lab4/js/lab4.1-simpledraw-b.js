var canvas,
	context,
	dragging = false,//initial value for dragging 
	dragStartLocation,
	snapshot;

function getCanvasCoordinates(event){
	var x = event.clientX - canvas.getBoundingClientRect().left,
		y = event.clientY - canvas.getBoundingClientRect().top;

		return {x: x, y:y};
}

function takeSnapshot(){
	snapshot = context.getImageData(0, 0, canvas.width, canvas.height);
}

function restoreSnapshot(){
	context.putImageData(snapshot, 0, 0);
}

function drawLine(position){
	context.beginPath();
	context.moveTo(dragStartLocation.x, dragStartLocation.y);
	context.lineTo(position.x, position.y);
	context.stroke();
}

function dragStart(event){
	dragging = true;
	dragStartLocation = getCanvasCoordinates(event);
	takeSnapshot();
}

function drag(event){
	var position;
	if(dragging === true){
		restoreSnapshot();
		position = getCanvasCoordinates(event);
		drawLine(position)
	}
}

function dragStop(event){
	 dragging = false;
	 restoreSnapshot();
	 var position = getCanvasCoordinates(event);
	 drawLine(position);
}

function init(){
	canvas =  document.getElementById("canvas-element");//selects canvas from html with canvas-element id
	context	= canvas.getContext('2d'); //dimension for the context of the canvas
	context.strokeStyle = 'blue';//color of the line
	context.lineWidth = 4; //width of the line drawing
	context.lineCap = 'round'; //shape of the endings of the line

	//mouse events
	canvas.addEventListener('mousedown', dragStart, false); 
	canvas.addEventListener('mousemove', drag, false);
	canvas.addEventListener('mouseup', dragStop, false);
}
window.addEventListener('load', init, false);//event to be false on loading the windows so that it starts on dragging or clicking


//resets the drawing canvas
function reset() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
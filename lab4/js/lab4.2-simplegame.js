var canvas = document.getElementById('canvas-element');
var context = canvas.getContext('2d');

var square;
var time = 0; //time variable with 0 as initialvalue
var result = 0;//result variable with 0 as initialvalue
var game = false;

function Square(x, y, w, h) {//for the shape of the square managing.

  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

}

var timer; //for calculation of the timer and info about time left

function getMousePos(canvas, event) {

  var rect = canvas.getBoundingClientRect(); //creating a rectangle when click on the canvas box

  return {

    x: event.clientX - rect.left, //shaping the box inside the canvas and so that it doesn't go outside the box.
    y: event.clientY - rect.top

  }
}

function onClick(e) {

  var mousePos = getMousePos(canvas, e);

  if (!square && !game) {
    var time = 10; //total time for the game and it decreases
    timer = setInterval(function() { //setting a time interval for how much time the game can be played
      if (time) {

        document.getElementById('for-time').innerHTML = time;
        time--; //reversing the counting of time/countdown 

      } else {

        game = false;
        document.getElementById('for-time').innerHTML = "GAME OVER!!!!"; //when time stops it shows
        clearInterval(timer);

      }

    }, 1000);

    game = true; //when game is started it run this code and executes.
    square = new Square(Math.random() * (canvas.width - 30), Math.random() * (canvas.height - 30), 30, 30);
    //randomizes the appearance of a square box inside canvas 

    context.clearRect(0, 0, canvas.width, canvas.height);//before starting rect has 0 and 0 height and width
    context.beginPath();//starting the game.
    context.strokeStyle = 'red';//coloring the outline of the square box inside canvas
    context.rect(square.x, square.y, 40, 40); //creating rect with 40 by 40 width and height which is square
    context.stroke();//executing the context values.

  } else if (mousePos.x >= square.x && mousePos.x <= square.x + square.w && mousePos.y >= square.y && mousePos.y <= square.y + square.h && game) {
    
    var finalresult = ++result;//shows latest result
    
    document.getElementById('for-score').innerHTML = finalresult; //shows latest result
    //can be direclty put ++result instead of finalresult 

    square = new Square(Math.random() * (canvas.width - 30), Math.random() * (canvas.height - 30), 30, 30);
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.strokeStyle = 'red';//coloring the outline of the square box inside canvas
    context.rect(square.x, square.y, 40, 40);
    context.stroke();

  }
}

canvas.addEventListener("click", onClick);

function restartGame(){
  location.reload(); //restart the game
}

var connection = new WebSocket('ws://obscure-waters-98157.herokuapp.com'); //brings the webserver

var msg = {

  text: document.getElementById('input').value//gets the value from input 

};

connection.onopen = function() {

  var p = document.createElement('p');

  p.innerHTML = 'Connected!'; //automatically shows connected in p tag

  document.getElementById('connection').appendChild(p);//creates the paragraph tag in html

};

connection.onerror = function(error) {

  console.log('WebSocket Error ' + error); //informs if error

};

connection.onmessage = function(e) {

  var p = document.createElement('p');

  p.innerHTML = e.data;

  document.getElementById('chat').appendChild(p); //in chat creates a p tag where message is shown.

};

document.getElementById('btn').addEventListener("click", function() {

  connection.send(document.getElementById("input").value);//sends the msg from server to our page.

  document.getElementById('input').value = ""; //input box returns to blank after each entry
});

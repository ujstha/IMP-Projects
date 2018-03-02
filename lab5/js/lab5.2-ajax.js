var names = [];//array empty to get list later from json 
var emails = [];//array empty to get list later from json 

function loadPersonList() {

  $.ajax({
    url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp",//loads person list from this url
    dataType: "jsonp", //file's in urls type is jsonp
  });

}

function jsonCallback(json) {//the callback function

  for (var i = 0; i < json.length; i++) {//value of i keeps on increasing until the condition is true

    names.push(json[i].name);//pushes the name from json file to var names
    emails.push(json[i].email);//pushes the email from json file to var emails

  }

  for (var i = 0; i < names.length; i++) {  //starting from 0 the value of i keeps on increasing until its value becomes less than the value of names in json file

    $('#name-of-person').append(names[i] + '<br>');//creates name of person in tag with id name-of-person
    $('#email-of-person').append(emails[i] + '<br>');//creates email in tag with id email-of-person
  
  }

}

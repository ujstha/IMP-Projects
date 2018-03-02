function addPerson() {

	var namelist = document.getElementById('add-person').value;

	if (namelist === "") {

		alert("Please enter Person's Name.");

	} else {

		document.getElementById('added-person').innerHTML = document.getElementById('added-person').innerHTML + '<li style="list-style-type: square;">' + namelist;
		
	}

	document.getElementById('add-person').value = ""; //input box returns to blank after each entry
}

function keyPress(event) {
    if(event.keyCode == 13){
        addPerson();
    }
}

/* if you want to make it more specific and not allow numbers or special character in input box then use this code instead of upper one.
*I have used this specificity in lab 2.js file for my 2nd lab project

function addPerson() {

	var namelist = document.getElementById('add-person').value;
	var alphabet = /^[A-Za-z ]+$/; //space is given after a-z specifically to allow space character while typing name
	//regular expression for text input only, add 0-9 with a-z to allow numbers too.
	if (namelist === "") {

		alert("Please enter Person's Name.");

	} else if (!namelist.match(alphabet)) {

		alert("Please enter Person's Name without NUMBER or SPECIAL CHARACTERS!.");

	} else {

		document.getElementById('added-person').innerHTML = document.getElementById('added-person').innerHTML + '<li style="list-style-type: square;">' + namelist;
		//the reason <li> is not given in first is because it would create one blank list before adding person list.
	}
}
*/
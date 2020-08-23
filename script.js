var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelector("ul");
// querySelector('selector') - matches a specified CSS selector

// 1. toggle .done class ----------------------------
var item = document.getElementsByTagName("li");

function toggleListElement() {
	for(var i = 0; i < item.length; i++){
		item[i].addEventListener("click", toggle)
	}
}
function toggle() {
	this.classList.toggle("done");
	// this refers to the current object
	// classList.toggle() / classList.add()
}
//---------------------------------------------------

// 2. Add delete buttons and functions---------------
// Needs improvement. Cannot delete specific li
var btn = document.querySelectorAll("li button");

for(i = 0; i< btn.length; i++){
	btn[i].addEventListener("click", () => {
		list.removeChild(item[0]);
	});
}


//---------------------------------------------------

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	list.appendChild(li);
	li.addEventListener("click",toggle);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
toggleListElement(); // 1. toggle done class

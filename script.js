// ------------------ Select elements ---------------------
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// ------------------ functions ---------------------------
function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = ""; // reset the placeholder to empty
}

function addListAfterClick() {
  if(inputLength() > 0){ // input.value != ""
    createListElement();
  }
}

function addListAfterKeyPress(event) {
  if(inputLength() > 0 && event.keyCode === 13){ // input.value != ""
    createListElement();
  }
}

// ------------------ button and input events -------------
// addListAfterClick and addListAfterKeyPress are called
// Callback functions (not run until event happens)
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
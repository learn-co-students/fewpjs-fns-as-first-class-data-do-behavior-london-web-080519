/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
let splitTime = time.split(':');
let numTime = parseInt(splitTime[0], 10);
if (numTime < 12) {
  let greeting = "Good Morning";
  return greeting;
} else if (numTime >= 17) {
  let greeting = "Good Evening";
  return greeting;
 } else {
  let greeting = "Good Afternoon"
  return greeting;
}

}



/* Write your implementation of displayMessage() */

function displayMessage(text) {
  document.getElementById("greeting").innerText = text
}


// varnewHeader=document.createElement("h1");
// newHeader.id='victory';
// vartext=document.createTextNode("YOUR-NAMEisthechampion");
// newHeader.appendChild(text);
// varelement=document.getElementById("div1");
// element.appendChild(newHeader);

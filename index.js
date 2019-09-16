/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) { 
  let timeInteger = parseInt(time, 10);
  if (timeInteger < 12) {return "Good Morning"};
  if (timeInteger >= 12 && timeInteger < 17) {return "Good Afternoon"};
  return "Good Evening";
}


/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.getElementById("greeting").innerText = string; 
}

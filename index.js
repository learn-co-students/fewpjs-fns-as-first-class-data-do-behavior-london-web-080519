import { getPackedSettings } from "http2"

/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  const hour = time.split(':')
  // return parseInt(hour[0],0)
  if (parseInt(hour[0],0) < 12) {
    return "Good Morning"
  } else if (parseInt(hour[0],0) < 19) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(greeting) {
  let input = document.getElementById('greeting')
  input.innerText = greeting
}
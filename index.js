/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = timeString => {
  const times = timeString.split(':')
  const hours = times[0], mins = times[1];
  if (Number(hours) < 12) {
    return "Good Morning"
  } else if (Number(hours) < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
const displayMessage = string => {
  const greetNode = document.getElementById('greeting')
  greetNode.innerText = string
}
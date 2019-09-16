/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let parts = time.match(/(\d+)\:(\d+)/);
  if (parts[1] < 12) {
    return "Good Morning"
  } else if (parts[1] > 12 && parts[1] < 17 ) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }

}

/* Write your implementation of displayMessage() */

function displayMessage(str) {
  let elem = document.getElementById("greeting");
  elem.innerText = `${str}`
};

/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time){
  function timeSplit(time) { 
      return time.split(":");
  }
  function integerHour(timeArray) {
    return parseInt(timeArray[0]);
  }
  let integerTime = integerHour(timeSplit(time));

    if (integerTime < 12){
      return 'Good Morning';
    }
    else if (integerTime > 12 && integerTime < 17){
      return 'Good Afternoon';
    }
    else if (integerTime > 17){
      return 'Good Evening';
    }
}

function displayMessage(message){
  document.getElementById('greeting').innerText = `${message}`;
}
let userNumbers = [];
let total = 0;

function sumNumbers() {
  for (let i = 0; i < userNumbers.length; i++) {
    total += userNumbers[i];
    displayMessage();
  }
}

function numberInput(numberClicked) {
  userNumbers.push(numberClicked);
  displayInput(numberClicked);
}

function displayInput(numberClicked) {
  document.getElementById("displayInput").innerHTML = numberClicked;
}

function done() {
  document.getElementById("question").innerHTML =
    "Would you like to see the correct answer or are you in search of a Shrubbery?";

  document.getElementById("correctAnswer").innerHTML = "Correct Answer";

  document.getElementById("shrubberySearch").innerHTML =
    "I'm searching for a Shrubbery";
}

function displayMessage() {
  document.getElementById("displayInput").innerHTML =
    "*** Your summed numbers =  " + total + " ***";
}

function shrubberySearch() {
  sumNumbers();
  if (total == 42) {
    document.getElementById("displayInput").innerHTML =
      "Congratulations!! Your total sum is " +
      total +
      ", instead of a Shrubbery, you found the meaning of life!";
  } else if (total <= 15) {
    document.getElementById("displayInput").innerHTML =
      "Based on the sum of the numbers you entered,  " +
      total +
      ", you no longer require a shrubbery, instead... you must cut down the mightiest tree in the forest with.... a Herring";
  } else if (total <= 30) {
    document.getElementById("displayInput").innerHTML =
      "Based on the sum of the numbers you entered,  " +
      total +
      ", it appears that you spent too long clicking the buttons, the shrubberys are now out of season ";
  } else if (total <= 50) {
    document.getElementById("displayInput").innerHTML =
      "Based on the sum of the numbers you entered,  " +
      total +
      ", we have decided that you weigh the same as a duck, and ducks float, as does wood, therefore you are made of wood and... well lets just say you'll never find a shrubbery";
  } else if (total <= 70) {
    document.getElementById("displayInput").innerHTML =
      "Based on the sum of the numbers you entered,  " +
      total +
      ", we have decided that you are not worthy of finding a Shrubbery";
  } else {
    document.getElementById("displayInput").innerHTML =
      "Based on the sum of the numbers you entered,  " +
      total +
      ", we know that you clicked like crazy and would cause chaos in a search for a shrubbery";
  }
}

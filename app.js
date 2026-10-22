let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Correct Answer", randomNum);
let chances = 0;
let timer;
const removeMsg = (message, color) => {
  helpInfo.innerText = message;
  helpInfo.style.color = color;

  clearTimeout(timer);

  timer = setTimeout(() => {
    helpInfo.innerText = "";
    helpInfo.style.color = "";
  }, 3000);
};

const chancesText = document.querySelector("#scoreText");
const helpInfo = document.querySelector(".help-info");
const form = document.querySelector(".game-card form");
const userInput = document.querySelector(".game-card input");
const checkttBtn = document.querySelector(".game-card button");

checkttBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const gusses = Number(userInput.value);

  if (userInput.value.trim() === "") {
    removeMsg("Please enter a valid number between 1 and 100.", "red");
    userInput.value = "";
    userInput.focus();
    return;
  }

  if (gusses < 1 || gusses > 100) {
    removeMsg("Please enter a valid number between 1 and 100.", "red");
    userInput.value = "";
    userInput.focus();
    return;
  }

  if (gusses === randomNum) {
    removeMsg("Correct! You guessed the right number.", "#4dfd08");
    chancesText.innerText = 100 - chances;
    setTimeout(() => {
      randomNum = Math.floor(Math.random() * 100) + 1;
      console.log("New Correct Answer", randomNum);
      chancesText.innerText = "0";
      chances = 0;
    }, 3000);
  } else if (gusses < randomNum) {
    removeMsg("The correct number is greater than your guess.", "#fffb00");
    chances++;
  } else {
    removeMsg("The correct number is less than your guess.", "#fffb00");
    chances++;
  }
  userInput.value = "";
});

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomInteger = getRandomInteger(1, 100); // Generates a random integer between 1 and 100 for pegs rewards.     
console.log(randomInteger);



alert("Welcome Back!"); //  This alert would show whenever you signed into an account.


const items = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 },
];

const total = calculateTotalCost(items);
console.log(total);  //something like this would be used to find check amount

function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}
console.log(validateEmail("test@example.com")); // true

// this would be used for email validation

//could be used for counting down to new item or promo release
function countdown(duration, displayElement) {
  let timer = duration;
  const interval = setInterval(function () {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    displayElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (--timer < 0) {
      clearInterval(interval);
      displayElement.textContent = "Time's up!";
    }
  }, 1000);
}

:
const display = document.getElementById('timer');
const countdownDuration = 60; // Countdown for 60 seconds
countdown(countdownDuration, display);

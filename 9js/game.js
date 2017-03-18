//create secretNumber
var secretNumber = Math.floor(Math.random() * 10);

while (guess !== secretNumber){ 
//ask user for guess
var guess = Number(prompt("Guess a number"))

//check if guess is right
if (guess === secretNumber) {
	alert("winner")
}

//check if higher or lower
else if (guess > secretNumber){
	alert("Too high, guess again")
}

else if (guess < secretNumber){
	alert("Too low, guess again")
}}
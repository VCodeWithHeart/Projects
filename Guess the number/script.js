let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessfield");
const guessSlot = document.querySelector(".guesses");
const attemptsRemain = document.querySelector(".attemptsrem");
const lowOrHigh = document.querySelector(".lowOrHigh");

const startOver = document.querySelector(".display");

// console.log(randomNumber);

const p = document.createElement("p");
// p.innerHTML = "hello"
// p.className = "newP"
// p.id = "newpara"
// p.style.textAlign = "center"
// p.style.fontWeight = "bold"
// p.style.color = "white"
// p.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"

// document.body.appendChild(p)

let prevGuess = []
let numGuess = 0

let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
       const guess = parseInt(userInput.value);
       console.log(guess);
       
       validateGuess(guess);
    })
}

function validateGuess(guess) {
    // 
    if (isNaN(guess)) {
        alert("Please enter a valid number")
        checkGuess()
    }
    else if(guess >= 1 && guess <= 100){
        prevGuess.push(guess)
        if (numGuess === 9) {
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${randomNumber}`)
            // playGame = false
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }

    }
    else{
        alert("Please enter a valid number between 1 and 100")
    }
}

function checkGuess(guess) {
    //
    if (guess === randomNumber) {
        displayMessage("You guessed it right");
        endGame();
    } else if (guess < randomNumber){
        displayMessage("Number is too Low");
    } else if (guess > randomNumber){
        displayMessage("Number is too High");
    }
}

function displayGuess(guess) {
    //
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `;
    numGuess++;

    attemptsRemain.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame" style>Start new Game</h2>'
    p.style.cursor = "pointer"
    p.style.color = "red"
    p.style.border = "2px solid azure"
    p.style.borderRadius = "25px"
    // p.style.backgroundColor = "white"

    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click',function (e) {
    randomNumber = parseInt(Math.random()*100+1);
    prevGuess = []
    numGuess = 0
    guessSlot.innerHTML = ""
    attemptsRemain.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute("disabled")
    startOver.removeChild(p)
    displayMessage("")
    // displayGuess()
    playGame = true
})
}

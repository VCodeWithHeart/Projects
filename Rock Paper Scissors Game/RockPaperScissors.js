let checking = document.querySelector("select")
let userInput
let h3 = document.querySelector("h3")
let btn1 = document.querySelector(".btn1")
let span2 = document.querySelector(".span2")
let span1 = document.querySelector(".span1")
let roundCount = document.querySelector(".roundCount")
let startPlaying = document.querySelector(".startPlaying")
let borderColorChange

let round1U = document.querySelector(".round1U")
let round2U = document.querySelector(".round2U")
let round3U = document.querySelector(".round3U")
let round1C = document.querySelector(".round1C")
let round2C = document.querySelector(".round2C")
let round3C = document.querySelector(".round3C")
let totalU = document.querySelector(".totalU")
let totalC = document.querySelector(".totalC")

// Creating Resultpara element to show result (verdict)

let Resultpara = document.createElement("p")
Resultpara.className = "Result"
Resultpara.style.color = "White"
Resultpara.style.margin = "10px"
Resultpara.style.fontSize = "25px"
Resultpara.style.fontFamily = "Impact"
Resultpara.style.letterSpacing = "1.2px"


// Resultpara.innerHTML = "<p>Result</p>"



//checking.selectedIndex // userInput

let ComputerChoice
let playTimes = 1
let UserScore = 0
let ComputerScore = 0

//select option ko disabled kardunga aur phir jab play buton pe click hoga tab enable kardunga
//user aaur computer ke poits ko count karunga aur jiska count 3 times ya rounds me jyada rahgea usko final winner baatdunga
// 3 round hojane ke baad user aur computer ke points ko reset kardunga

// For Generating Random Values Function

function randomVal() {
  ComputerChoice = Math.round(Math.random() * 2)

  return ComputerChoice
}

// Initializing ComputerChoice With Random Value

ComputerChoice = randomVal()

btn1.addEventListener("click", function (e) {

  playRound()

  function playRound() {

    // console.log("ComputerChoice:",randomVal());
    userInput = checking.selectedIndex
    // console.log("userInput:", userInput);
    // console.log("ComputerChoice:",randomVal());

    span1.innerHTML = `${select[ComputerChoice].value}`

    if (userInput == 0 && ComputerChoice == 2) {
      span2.innerHTML = `<i>User Won!</i>`
      UserScore++
    }
    else if (userInput == 1 && ComputerChoice == 0) {
      span2.innerHTML = `<i>User Won!</i>`
      UserScore++
    }
    else if (userInput == 2 && ComputerChoice == 1) {
      span2.innerHTML = `<i>User Won!</i>`
      UserScore++
    }
    else if (userInput == ComputerChoice) {
      span2.innerHTML = `<i>It's a Tie!</i>`
    }
    else if (ComputerChoice == 0 && userInput == 2) {
      span2.innerHTML = `<i>Computer Won!</i>`
      ComputerScore++
    }
    else if (ComputerChoice == 1 && userInput == 0) {
      span2.innerHTML = `<i>Computer Won!</i>`
      ComputerScore++
    }
    else if (ComputerChoice == 2 && userInput == 1) {
      span2.innerHTML = `<i>Computer Won!</i>`
      ComputerScore++
    }



    randomVal()

    // console.log("New ComputerChoice:", randomVal());

    if (playTimes == 1) {
      // if (UserScore == 1 || ComputerScore == 1) {
      if (UserScore == 1) {
        round1U.innerHTML = 1
        UserScore = 0
        ComputerScore = 0
      }
      else if (ComputerScore == 1) {
        round1C.innerHTML = 1
        UserScore = 0
        ComputerScore = 0
      }
      // }
    }

    else if (playTimes == 2) {
      // if (UserScore == 1 || ComputerScore == 1) {
      if (UserScore == 1) {
        round2U.innerHTML = 1
        UserScore = 0
        ComputerScore = 0
      }
      else if (ComputerScore == 1) {
        round2C.innerHTML = 1
        UserScore = 0
        ComputerScore = 0
      }
      // }
    }

    else if (playTimes == 3) {
      // if (UserScore == 1 || ComputerScore == 1) {
      if (UserScore == 1) {
        round3U.innerHTML = 1
        UserScore = 0
        ComputerScore = 0
      }
      else if (ComputerScore == 1) {
        round3C.innerHTML = 1
        UserScore = 0
        ComputerScore = 0
      }
      // }
    }

    // No of rounds Counter
    roundCount.innerHTML = playTimes

    if (playTimes < 3) {
      // roundCount++
      playTimes += 1
    } else {
      totalC.innerHTML = Number(round1C.innerHTML) + Number(round2C.innerHTML) + Number(round3C.innerHTML)
      totalU.innerHTML = Number(round1U.innerHTML) + Number(round2U.innerHTML) + Number(round3U.innerHTML)

      if (Number(totalU.innerHTML) > Number(totalC.innerHTML)) {
        Resultpara.innerHTML = `Verdict :- <span style="color:yellow;">User</span> Won!`
        document.body.appendChild(Resultpara)
      }
      else if (Number(totalU.innerHTML) < Number(totalC.innerHTML)) {
        Resultpara.innerHTML = `Verdict :- <span style="color:yellow;">Computer</span> Won!`
        document.body.appendChild(Resultpara)
      }
      else {
        Resultpara.innerHTML = `Verdict :- <span style="color:Red;">It's a Tie</span> <br> Click Start Game Button For a Rematch`
        document.body.appendChild(Resultpara)
      }

      playTimes = 0
      select.disabled = true
      btn1.disabled = true
    }

  }

})


// Some More functions and Animation Effects

let h1 = document.querySelector("h1")

setInterval(() => {

  r = Math.round(Math.random() * 255)
  g = Math.round(Math.random() * 255)
  b = Math.round(Math.random() * 255)

  h1.style.textShadow = `2px 2px 2px rgb(${r},${g},${b})`;

}, 2000);


function animationBorder() {
  borderColorChange = setInterval(() => {

    r = Math.round(Math.random() * 255)
    g = Math.round(Math.random() * 255)
    b = Math.round(Math.random() * 255)

    startPlaying.style.border = `2px solid rgb(${r},${g},${b})`

  }, 1000);


  return borderColorChange

}


startPlaying.addEventListener('mouseover', function (e) {

  // startPlaying.style.border = "2px solid orchid"

  animationBorder()

})

startPlaying.addEventListener('mouseout', function (e) {

  // startPlaying.style.border = "2px solid orchid"

  clearInterval(borderColorChange)
  startPlaying.style.border = "none"


})

startPlaying.addEventListener('click', function (e) {
  span2.innerHTML = `<i>-</i>`
  span1.innerHTML = `-`
  Resultpara.innerHTML = ""
  round1U.innerText = 0
  round2U.innerText = 0
  round3U.innerText = 0
  round1C.innerText = 0
  round2C.innerText = 0
  round3C.innerText = 0
  totalU.innerHTML = 0
  totalC.innerHTML = 0
  roundCount.innerHTML = 1
  playTimes = 1
  btn1.disabled = false
  select.disabled = false
})
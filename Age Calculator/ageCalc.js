let d = document.querySelector("#date")
let m = document.querySelector("#month")
let y = document.querySelector("#year")
let reset = document.querySelector(".reset")
let submit = document.querySelector(".submit")

// Date variables

let birthDay // full birthdate

let birthYear // birth year only
let birthMonth // birth month only
let birthDate // birth date only
let dayBorn // time in milliseconds from 1970 to birthday

let currentYear // this year
let currentMonth // this month
let currentDate // today's date
let currentDay // time in milliseconds from 1970 to current year (today)

let yearsOld


// Show Age Data

let verdictYears = document.querySelector(".verdictYears")
let verdictMonths = document.querySelector(".verdictMonths")
let verdictDays = document.querySelector(".verdictDays")
let verdictAge = document.querySelector(".verdictAge")

reset.addEventListener("click", (e) => {
    d.value = ""
    m.value = ""
    y.value = ""

    verdictYears.innerHTML = ""
    verdictMonths.innerHTML = ""
    verdictDays.innerHTML = ""
    verdictAge.innerHTML = ""
})

submit.addEventListener("click", (e) => {
    birthDay = new Date(`${y.value}-${m.value}-${d.value}`)

    birthYear = birthDay.getFullYear()
    birthMonth = birthDay.getMonth()
    birthDate = birthDay.getDate()
    dayBorn = birthDay.getTime()

    currentYear = new Date().getFullYear()
    currentMonth = new Date().getMonth()
    currentDate = new Date().getDate()
    currentDay = new Date().getTime()

    yearsOld = currentYear - birthYear

    // years calc

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate < birthDate)) {
        yearsOld--
    }

    // months calc

    if (currentMonth >= birthMonth) {
        monthsOld = currentMonth - birthMonth
    }
    else {
        monthsOld = (12 - birthMonth) + currentMonth
    }

    // days calc

    const millisecondsPerDay = 86400000;
    const diffInMilliseconds = currentDay - dayBorn
    const daysSinceBorn = Math.floor(diffInMilliseconds / millisecondsPerDay)
    const daysOld = (daysSinceBorn % 365) - Math.floor((currentYear - birthYear) / 4)

    verdictYears.innerHTML = `${yearsOld}`
    verdictMonths.innerHTML = `${monthsOld}`
    verdictDays.innerHTML = `${daysOld}`
    verdictAge.innerHTML = `You are ${yearsOld} years ${monthsOld} months ${daysOld} days old.`

})
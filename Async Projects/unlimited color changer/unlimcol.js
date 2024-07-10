// generate a random color

const randomColor = function () {
    const hex = "01234456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[(Math.floor(Math.random() * 16))]
    }
    return color
}

let intervalId;
let counter = 0

const startChangingColor = function () {

    counter++

    if (counter == 1) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor()
        }, 1000);
        // alert(counter)
    }
    else {

        console.log("you can't do this it changes color faster");
        // alert(counter)
    }



}

const stopChangingColor = function () {
    clearInterval(intervalId)
    intervalId = null;

    counter = null
}


document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector("#stop").addEventListener('click', stopChangingColor)
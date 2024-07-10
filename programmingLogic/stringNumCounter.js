let enteredString = "Mahi7DhoniVirat18Kohli"
let numstring = enteredString.toLowerCase()

let counter = 0;
// console.log(numstring.length);
for (let i = 0; i < numstring.length; i++) {
    // let c = Number(numstring[i]) // question

    if (!isNaN(Number(numstring[i]))) {
        counter++;
    }

}

console.log("The number of numbers in this string are: ", counter);



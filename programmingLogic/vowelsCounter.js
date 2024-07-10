let enteredString = "anagram"
let vowstring = enteredString.toLowerCase()

let counter = 0;

for (let i = 0; i < vowstring.length; i++) {
    let c = String(vowstring[i])
    if ((c == 'a') || (c == 'e') || (c == 'i') || (c == 'e') || (c == 'u')) {
        counter++;
    }

}

console.log("The number of vowels in this string are: ", counter);

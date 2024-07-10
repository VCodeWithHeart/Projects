let enteredString = "Sachin"
let constring = enteredString.toLowerCase()

let counter = 0;

for (let i = 0; i < constring.length; i++) {
    let c = String(constring[i])

    // if ('a' == c) {
    //     counter = counter + 0;
    // }
    
    // else if('e' == c){
    //     counter = counter + 0;
    // }
    // else if('i' == c){
    //     counter = counter + 0;
    // }
    // else if('o' == c){
    //     counter = counter + 0;
    // }
    // else if('u' == c){
    //     counter = counter + 0;
    // }
    // else{
    //     counter++;
    // }

    if ((c == 'a') || (c == 'e') || (c == 'i') || (c == 'o') || (c == 'u')) {
        counter = counter + 0;
    }
    else{
        counter++;
    }

}

console.log("The number of Consonants in this string are: ", counter);
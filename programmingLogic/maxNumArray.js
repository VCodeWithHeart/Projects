let myArr = [1, 5, 6, 45, 45, 65, 78, 98, 15, 84, 51, 2]
let maxNum = 0;

for (let i = 0; i < myArr.length; i++) {
    if (maxNum < myArr[i]) {
        maxNum = myArr[i]
    }

}

console.log(maxNum);
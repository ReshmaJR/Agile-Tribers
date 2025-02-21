// ex 1
const arr = [5, 2, -7, 3, -2, -1];
console.log("OG array:" , arr);
let neg_arr = arr.filter(n => n < 0);
console.log("Neg nums in array are:",neg_arr);

// ex 2
const arr1 = [5, 10, 15, 20, 22, 23];
console.log("OG Array is :", arr1);
let final_arr = arr1.map(n => n % 2 != 0 ? 0 : n);
console.log("After removing odd nums & replacing them with 0's:" ,final_arr);

// ex 3
// const readline = require("readline-sync");
const readline = require("readline-sync");
let sum = 0;
let num;

while (true) {
    num = parseInt(readline.question("Enter a num:"), 10);
    if (num === 0) break;
    sum += num;
}
console.log("Total Sum:", sum);

// ex 4
let prev = 0;
let a = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
for (let i = 0; i < 10; i++) {
    let sum = prev + a[i];
    console.log(`Current Number: ${a[i]}, Previous Number: ${prev}, Sum: ${sum}`);
    prev = a[i];
}

// ex 5

let evenCount = 0, oddCount = 0;

for (let i = 10; i <= 55; i++) {
    if (i % 2 === 0) {
        evenCount++
    }
    else {
        oddCount++
    }
}
console.log("Even Count:", evenCount);
console.log("Odd Count:", oddCount);







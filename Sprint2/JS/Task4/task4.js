// npm install readline-sync
// npm audit fix

// ex 1
console.log("Ex1-Pos & Neg");
console.log("____________________________")
let n;
const readline = require("readline-sync");
n = parseInt(readline.question(" Enter a num: "));
if (n > 0) {
    console.log("The num is Positive.");
}
else if (n === 0) {
    console.log("Enter a proper num.");
}
else {
    console.log(" The num is Negative.")
}
console.log("____________________________")

// ex 2
console.log("Ex2- OddEven");
let num = parseInt(readline.question(" Enter num: "));
if (num % 2 == 0) {
    console.log("The num is Even.");
}
else {
    console.log("The num is Odd.");
}
console.log("____________________________")

// ex 3
console.log("Ex3-Power of a num");
function pow(a, b) {
    console.log("Pow : ", a ** b);
}
let a = parseInt(readline.question(" Enter base val: "));
let b = parseInt(readline.question(" Enter power val: "));
pow(a, b);
console.log("____________________________")
// ex 4
console.log("Ex4-Compare two numbers");
function comp(x, y) {
    if (x > y) {
        console.log(x, "is greater than ", y);
    }
    else if (x < y) {
        console.log(y, "is greater than ", x);
    }
    else {
        console.log(x, "is equal to ", y);
    }
}
x = parseInt(readline.question(" Enter first number: "));
y = parseInt(readline.question(" Enter second number: "));
comp(x, y);
console.log("____________________________")

// ex 5
console.log("Ex5-Leap Year");
x = parseInt(readline.question(" Enter year: "));
if ((x % 4 == 0 && x % 100 != 0) || (x % 400 == 0)) {
    console.log(x, "is a leap year.");
}
else {
    console.log(x, "is not a leap year.");
}
console.log("____________________________")
// ex 6
console.log("Ex6-Grade calculator");

x = parseInt(readline.question(" Enter the score: "));
if (x >= 90 && x <= 100) {
    console.log("Grade A");
}
else if (x >= 80 && x <= 89) {
    console.log("Grade B");
}
else if (x >= 70 && x <= 79) {
    console.log("Grade C");
}
else if (x >= 60 && x <= 69) {
    console.log("Grade D");
}
else {
    console.log("Grade F");

}

console.log("____________________________")
//  ex 7
console.log("Ex7-Age Based msg");
let age;
age = parseInt(readline.question(" Enter your age: "));
if (age < 16) {
    console.log("You can't drive");
}
else if (age >= 16 && x <= 17) {
    console.log("You can drive but not vote.");
}
else if (age >= 18 && x <= 24) {
    console.log("You can vote but not rent a car.");
}
else {
    console.log("You can do pretty much anything.");

}
console.log("____________________________")
//  ex 8
console.log("Ex7-FizzBuzz challenge");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
console.log("____________________________")

// ex 9
console.log("Ex9-Leap Year");
x = parseInt(readline.question(" Enter year: "));
if ((x % 4 == 0 && x % 100 != 0) || (x % 400 == 0)) {
    console.log(x, "is a leap year.");
}
else {
    console.log(x, "is not a leap year.");
}
console.log("____________________________")


















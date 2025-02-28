// ex 1
console.log("____________________________________________________________________");
console.log(" EX1-Numbers from 1 to 10 : ");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("____________________________________________________________________");


// ex 2
console.log("EX2-Even numbers from 1 to 20: ");
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0)
        console.log(i);
}
console.log("____________________________________________________________________");


// ex 3
console.log("EX3-Odd numbers from 1 to 20: ");
for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0)
        console.log(i);
}
console.log("____________________________________________________________________");

// ex 4
console.log("EX4-Factorial: ");
let num = 4, fact = 1;
for (let i = num; i > 1; i--) {
    fact = fact * i;
}
console.log(`Factorial of ${num} is : ${fact}`);
console.log("____________________________________________________________________");

// ex 5
console.log("EX5-Sum of numbers from 1 to 100: ");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum :", sum);
console.log("____________________________________________________________________");

// ex 6
console.log("EX6-Avg of nums in an array: ");
let l = [10, 20, 30, 40, 50], tot = 0, avg;
for (let n of l) {
    tot += n;
}
avg = tot / l.length;
console.log(`Average of ${l} is ${avg}`);
console.log("____________________________________________________________________");

// ex 7 Square
console.log("EX7-Patterns ");
console.log("Square : ");
let x = 4; pattern = "";
for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= x; j++) {
        pattern += "* ";
    }
    pattern += "\n";
}
console.log(pattern);
// ex 7 Triangle
console.log("Triangle : ");
x = 4; pattern = "";
for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    pattern += "\n";
}
console.log(pattern);
console.log("____________________________________________________________________");

// ex 8
console.log(" EX8-Numbers from 1 to 5 :")
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("____________________________________________________________________");

// ex 9
console.log("EX9-Natural numbers: ");
console.log("Numbers from 1 to 10 :")
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("____________________________________________________________________");

// ex 10
console.log("EX10: ");
let arr = [10, 20, 30, 40, 10];
if (arr[0] === arr[arr.length - 1])
    console.log(`The first and last elements in ${arr} are same.`);
else
    console.log(`The first and last elements in ${arr} are not same.`);
console.log("____________________________________________________________________");

// ex 11
console.log("EX11:");
let arr2 = [10, 14, 50, 65, 28, 30];
console.log(`Elements divisible by 5 in ${arr2} are :`);
for (let num of arr2) {
    if (num % 5 === 0) console.log(num);
}

// ex 12
console.log("EX12-Vowel or Consonant: ");
function checkChar(char) {
    /[aeiouAEIOU]/.test(char) ? console.log(`${char} is a vowel`) :
        console.log(`${char} is a consonant`);
}

checkChar('o');
checkChar('M');
console.log("____________________________________________________________________");

// ex 13
console.log("EX13: ");
let evenC = 0, oddC = 0;
for (let i = 10; i <= 55; i++) {
    if (i % 2 === 0)
        evenC++
    else
        oddC++;
}
console.log(`From 10 to 55 :\n Even Count is ${evenC}, Odd Count is ${oddC}`);
console.log("____________________________________________________________________");

// ex 14
console.log("EX14: ");
console.log("Numbers from 1 to 25, without multiples of 5");
for (let i = 1; i <= 25; i++) {
    if (i % 5 !== 0)
        console.log(i);
}
console.log("____________________________________________________________________");

// ex 15

function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function Factorials(arr) {
    let factorials = [];
    for (let num of arr) {
        factorials.push(factorial(num));
    }
    return factorials;
}
let numbers = [3, 4, 5, 6];
console.log(`EX15- Factorial of each elt in an array ${numbers}`);
console.log(Factorials(numbers));
console.log("____________________________________________________________________");

// ex 16
console.log("EX16: ");
console.log("Product or Sum : ");
function productOrSum(a, b) {
    let product = a * b;
    return product > 500 ? a + b : product;
}
console.log(productOrSum(10, 100));
console.log("____________________________________________________________________");

// ex 17
console.log("EX17- Greatest of 2 nums: ");
let a = 10, b = 7;
console.log(`Greatest of ${a} and ${b} is ${a > b ? a : b}`);
console.log("____________________________________________________________________");

// ex 18
console.log("EX18- Greatest of 3 nums: ");
let p = 10, q = 8, r = 19;
let greatest = (p >= q && p >= r) ? p :
    (q >= p && q >= r) ? q : r;
console.log(`The greatest number among ${p}, ${q} and ${r} is : ${greatest}`);
console.log("____________________________________________________________________");

// ex 19
console.log("EX19-Pos and Neg nums in a list ");
let list = [10, -15, 6, 23, -4, 64, -17, -2];
let posNums = [], negNums = [];
for (let u of list) {
    if (u >= 0)
        posNums.push(u)
    else
        negNums.push(u)
}
console.log("Positive Numbers:", posNums);
console.log("Negative Numbers:", negNums);
console.log("____________________________________________________________________");

// ex 1
console.log("Ex1-Prod or Sum");
function calc(n1, n2) {
    let product = n1 * n2;
    return product > 500 ? "Sum: " + (n1 + n2) : "Product: " + product;
}
console.log(calc(10, 7));
console.log("____________________________")

// ex 2
console.log("Ex2- Greatest of three nums");
const readline = require("readline-sync");

let num1 = parseInt(readline.question("Enter first num: "), 10);
let num2 = parseInt(readline.question("Enter second num: "), 10);
let num3 = parseInt(readline.question("Enter third num: "), 10);

let greatest = (num1 >= num2 && num1 >= num3) ? num1 : 
               (num2 >= num1 && num2 >= num3) ? num2 : num3;
console.log(`The greatest number is: ${greatest}`);
console.log("____________________________")

// ex 3
console.log("Ex3- Removing duplicates from a list");
let list = [10,20,'a',30,'a'];
console.log("Removing duplicates from ", list,":",[...new Set(list)]); 
console.log("____________________________")

// ex 4
console.log("Ex4-Remove & replace elts in an array");
function removeDups(nums, remove){
    let num1= nums.filter( num => num!=remove);

    while (num1.length < nums.length) {
        num1.push("_");
    }
    return num1;
}
let nums = [3, 2, 2, 3, 4, 5, 3, 6];
let remove = 3;
console.log(nums, "After removing duplicates & adding _ : ", removeDups(nums, remove)); 
console.log("____________________________")

// ex 5
console.log("Ex5- Check Duplicates");
function Dups(num){
    return (new Set(num)).length != num;
}
let num = [1,2,3,1];
console.log(num, Dups(num)); 
num = [1,2,3,4];
console.log(num, Dups(num)); 
console.log("____________________________")

// ex 6
console.log("Ex6-Sum of digits");

let n1 = parseInt(readline.question("Enter first number:"), 10);
while(n1>=10){
    n1 = n1.toString().split('').reduce((sum, num) => sum+ Number(num),0);
}
console.log("Single digit sum :", n1);
console.log("____________________________")

// ex 7
console.log("Ex7- Duplicate zeroes");

function duplicateZeros(arr) {
    let result = [];
    for (let num of arr) {
        if(result.length < arr.length){
            result.push(num);
            if (num === 0) result.push(0);
        }
    }
    return result;
}
let arr = [1, 0, 2, 3, 0, 4, 5, 0];
console.log(arr, "After adding duplicates: ", duplicateZeros(arr));
console.log("____________________________")


// ex 8 
console.log("Ex8-Intersection of 2 arrays");

function common(num1,num2){
    let set2 = new Set(num2);
    return [...new Set(num1.filter( num => set2.has(num)))];
}
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
console.log("Intersection of", nums1, "and", nums2, common(nums1, nums2));
console.log("____________________________")


// ex 1
console.log("EX1- PASSWORD STRENGTH VALIDATOR:")
function isStrongPassword(password) {
    const lengthCheck = password.length >= 8;
    const lowercaseCheck = /[a-z]/.test(password);
    const uppercaseCheck = /[A-Z]/.test(password);
    const digitCheck = /\d/.test(password);
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (lengthCheck && lowercaseCheck && uppercaseCheck && digitCheck && specialCharCheck) {
        return "Strong Password";
    } else {
        return "Weak Password";
    }
}

console.log(isStrongPassword("Pass@123"));
console.log(isStrongPassword("weakpass"));
console.log("_____________________________________")


// ex 2
console.log("EX2- ARRAY WRAPPER FUNC:")

function arrayProcess(nums, operation) {
    flat = nums.flat();
    let sum = 0;
    if (operation == "Add") {
        return flat.reduce((sum, num) => sum += num, 0);
    }
    else if (operation == "String") {
        return flat;
    }
}
console.log("Add:")
console.log(arrayProcess([[1, 2], [3, 4]], "Add"));
console.log("String:")
console.log(arrayProcess([[23, 98], [42, 70]], "String"));
console.log("_____________________________________")


// ex 3
console.log("EX3- EXPANING ARRAY WITH A PATTERN:")

let arr1 = [5, 10, 20, 2, 0, 33, 100, 90];
let i = 0, temp = [], sum1;
while (i < arr1.length) {
    sum1 = 0;
    temp.push(arr1[i], arr1[i + 1]);
    sum1 = arr1[i] + arr1[i + 1];
    temp.push(sum1);
    i += 2;
}
console.log("Input array :", arr1, "\nPattern :", temp)
console.log("_____________________________________")

// ex 4 
console.log("EX4-MOVE ZEROES TO END")

let elts = [0, 1, 0, 3, 12];
i = 0;

console.log("Before : ", elts);
for (let num of elts) {
    if (num !== 0) {
        elts[i++] = num;
    }
}
while (i < elts.length) {
    elts[i++] = 0;
}
console.log("After moving zeroes :", elts);
console.log("_____________________________________")

// ex 5
console.log("EX5-REMOVING SPACES FROM A STR")

let str = "Hola Como estas?";
let newStr = "";
console.log("Before : ", str);
i = 0;
for (let char of str) {
    if (char != " ")
        newStr += char;
}
console.log("After removing spaces :", newStr);
console.log("_____________________________________")

// ex 6
console.log("EX6-SWAPPING 2 NUMBERS")

let x = 10, y = 7;

console.log(`Before swapping: x = ${x}, y = ${y}`);
x = x ^ y;
y = x ^ y;
x = x ^ y;
console.log(`After swapping: x = ${x}, y = ${y}`);
console.log("_____________________________________")

// ex 7
console.log("EX7-ANAGRAMS")

function anagram(str1, str2) {
    if (str1.length !== str2.length)
        return false;

    return [...str1].sort().join('') === [...str2].sort().join('');
}

console.log("Is the below words Anagram? :")
console.log("first words:", anagram("evil", "vile"));
console.log("sec words:", anagram("messi", "neymar"));
console.log("_____________________________________")

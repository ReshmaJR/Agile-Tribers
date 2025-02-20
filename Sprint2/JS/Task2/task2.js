// ex 1

let ballPosession = "80%";
let half_time_score = "2-1";
let $MvP = "Pedri";
console.log("Ball Posession:", ballPosession);
console.log("Score:", half_time_score);
console.log("MVP:", $MvP);

// ex 2

const num = 10;
// num=7;
// console.log(num); error


// ex 3
let arr1 = ['a', 1, 'b', 2]
let arr2 = ['x', 'y', 5, 6, 'z']
console.log("Array1:", arr1);
arr1.push('c')
arr1.push(3)
console.log("Array1:", arr1);
arr1.pop()
console.log(arr1)
let arr3 = arr1.concat(arr2)
console.log("Concatenated array:", arr3)
console.log("Reversed array:", arr2.reverse())

// ex 4

let x = 10, y = 7
let Addition = x + y
console.log("Addition :", Addition)

// ex 5

let r = 2;
let PI = 3.14;
console.log(`Area of a circle with radius ${r} is ` + (PI * r * r).toFixed(2));

// ex 6
let length = 10, width = 5;
let area = length * width;
console.log("Area of rectangle is:", area)

// ex 7

let b = 6, h = 2
let A = (b * h) / 2
console.log("Area of triangle is:", A)

// ex 8
let u = 10, v = 7
console.log("Addition :", (u + v))
console.log("Subtraction :", (u - v))
console.log("Multiplication :", (u * v))
console.log("Division :", (u / v))
console.log("modulus :", (u % v))

// ex 9
let n = 20
console.log("n:", n)
n += 5
console.log("After +=", n)

n -= 10
console.log("After -=", n)

n *= 2
console.log("After *=", n)


n **= 10
console.log("After **=", n)

n /= 10
console.log("After /=", n)

// ex 10
let val = 50
console.log("value:", val)

val++
console.log("value++:", val)

val--
console.log("value--:", val)

// ex 11
let c = 10, d = "10";

console.log("c == d:", c == d);
console.log("c === d:", c === d);
console.log("c != d:", c != d);
console.log("c !== d:", c !== d);
console.log("c > d:", c > d);
console.log("c < d:", c < d);
console.log("c >= d:", c >= d);
console.log("c <= d:", c <= d);


// 12
let T = true, F = false;
console.log("AND:", T && F);
console.log("OR:", T || F);
console.log("NOT:", !T);

// 13
let $a = 10, $b = 7;
console.log(`Before Swap: $a = ${$a}, $b = ${$b}`);
[$a, $b] = [$b, $a];
console.log(`After Swap: $a = ${$a}, $b = ${$b}`);


// 14
let n1 = 40, n2 = 20, n3 = 60;
let avg = (n1 + n2 + n3) / 3;
console.log("Average:", avg);

// 15
let _a = 10, _b = 30, _c = 12, _d = 3;
let result = (_a + _b) * _c / _d;
console.log("Final Result:", result);

// 16
let Tam = 95, Eng = 100, Math = 85, Sci = 90, Soc = 92;

let Totalmarks = Tam + Eng + Math + Sci + Soc;
let Avgmarks = Totalmarks / 5;
console.log("Total Marks:", Totalmarks);
console.log("Average Marks:", Avgmarks);













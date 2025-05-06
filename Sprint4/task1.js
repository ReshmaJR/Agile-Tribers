// task1
console.log('TASK1:');

function squareNumbers(numbers) {
    return numbers.map(function (num) {
        return num * num;
    });
}
const squareNumbersArrow = (numbers) => numbers.map(num => num * num);

const input = [1, 2, 3, 4, 5];
console.log(squareNumbers(input));
console.log(squareNumbersArrow(input));

//   task2
console.log('TASK2:');

function mergeObjects(obj1, obj2, obj3) {
    return { ...obj1, ...obj2, ...obj3 };
}
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

const mergedObj = mergeObjects(obj1, obj2, obj3);
console.log(mergedObj);

// task3
console.log('TASK3:');
function getStudentScore(students, studentName) {
    const studentMap = new Map();

    students.forEach(student => {
        studentMap.set(student.name, student.score);
    });

    return studentMap.get(studentName);
}

const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 }
];

const score = getStudentScore(students, 'Bob');
console.log(score);

//   task4
console.log('TASK4:');
function getUniqueNumbers(numbers) {
    return [...new Set(numbers)];
}

const list = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = getUniqueNumbers(list);
console.log(uniqueNumbers);

//   task5
console.log('TASK5:');
function filterLongWords(words) {
    return words.filter(word => word.length > 5);
}

const arr = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
const result = filterLongWords(arr);
console.log(result); 


// task6
console.log('TASK6:');

function getProduct(numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}
const num = [1, 2, 3, 4, 5];
const prod = getProduct(num);
console.log(prod);

//   task7
console.log('TASK7:');
function findFirstAndLastIndex(arr, element) {
    return {
        firstIndex: arr.indexOf(element),
        lastIndex: arr.lastIndexOf(element)
    };
}

const arr1 = [1, 2, 3, 2, 4, 2, 5];
const op = findFirstAndLastIndex(arr1, 2);
console.log(op);

// task8
console.log('TASK8:');
function isArray(variable) {
    return Array.isArray(variable);
}
console.log(isArray([1, 2, 3]));
console.log(isArray('Hello'));

//   task9
console.log('TASK9:');
function containsWord(sentence, word) {
    return sentence.includes(word);
}
const sentence = 'The quick brown fox jumps over the lazy dog';
const word = 'fox';
console.log(containsWord(sentence, word));

// task10
console.log('TASK10:');
function printIndexes(arr) {
    for (let index of arr.keys()) {
        console.log(index);
    }
}

const fruits = ['apple', 'banana', 'cherry'];
printIndexes(fruits);





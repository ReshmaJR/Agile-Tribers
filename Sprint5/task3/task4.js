//task1
console.log('TASK1');

function findFirstPositive(numbers) {
    return numbers.find(num => num > 0);
}

const numbers = [-5, -3, 0, 9, 2];
console.log('First pos num:', findFirstPositive(numbers));
console.log('_________________________________________________________');

//task2
console.log('TASK2');

function findBookByTitle(books, title) {
    return books.find(book => book.title === title);
}

const books = [
    { title: '1984', author: 'George Orwell' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
];

console.log(findBookByTitle(books, 'To Kill a Mockingbird'));
console.log('_________________________________________________________');

//task3
console.log('TASK3');

function findEmployeeById(employees, id) {
    return employees.find(employee => employee.id === id);
}

const employees = [
    { id: 1, name: 'Alice', position: 'Manager' },
    { id: 2, name: 'Bob', position: 'Engineer' },
    { id: 3, name: 'Charlie', position: 'Technician' }
];
console.log(findEmployeeById(employees, 2));
console.log('_________________________________________________________');

//task4
console.log('TASK4');

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findFirstPrime(numbers) {
    return numbers.find(isPrime);
}
const numberArray = [4, 6, 8, 9, 11, 15];
console.log(findFirstPrime(numberArray));
console.log('_________________________________________________________');

//task5
console.log('TASK5');

function describePerson(person) {
    const { firstName, lastName, age } = person;
    return `${firstName} ${lastName} is ${age} years old!`;
}

const person = { firstName: 'John', lastName: 'Doe', age: 30 };
console.log(describePerson(person));
console.log('_________________________________________________________');

//task6
console.log('TASK6');

function getEvenSquares(numbers) {
    return numbers
        .filter(num => num % 2 === 0)
        .map(num => num ** 2);
}
const numbers1 = [1, 2, 3, 4, 5, 6];
console.log(getEvenSquares(numbers));
console.log('_________________________________________________________');

//task7
console.log('TASK7');

function joinWords(separator = ',', ...words) {
    return words.join(separator);
}
console.log(joinWords('-', 'apple', 'banana', 'cherry'));
console.log(joinWords('apple', 'banana', 'cherry'));
console.log('_________________________________________________________');

//task8
console.log('TASK8');

function getUniqueElements(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}
const result = getUniqueElements([1, 2, 3], [3, 4, 5]);
console.log(result);
console.log('_________________________________________________________');

//task9

async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
console.log('TASK9');

fetchTodo();
console.log('_________________________________________________________');

//task10
console.log('TASK10');

function productsAboveAverage(products) {
    const totalPrice = products.reduce((total, { price }) => total + price, 0);
    const averagePrice = totalPrice / products.length;

    return products
        .filter(({ price }) => price > averagePrice)
        .map(({ name }) => name);
}
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 }
];
console.log(productsAboveAverage(products));









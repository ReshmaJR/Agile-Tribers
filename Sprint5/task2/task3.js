// task1
console.log('TASK1');

function findLongestString(strings) {
    return strings.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}

const input = ['apple', 'banana', 'cherry', 'date'];

const longest = findLongestString(input);
console.log('Longest string:', longest);
console.log('_________________________________________________________');

// task2
console.log('TASK2');

function flattenArray(nestedArray) {
    return nestedArray.reduce((flat, current) => {
        return flat.concat(current);
    }, []);
}

const arr = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];

const flattened = flattenArray(arr);
console.log('Flattened array:', flattened);
console.log('_________________________________________________________');

// task3
console.log('TASK3');

function countOccurrences(words) {
    return words.reduce((counts, word) => {
        counts[word] = (counts[word] || 0) + 1;
        return counts;
    }, {});
}

const arr1 = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const result = countOccurrences(arr1);
console.log('Word counts:', result);
console.log('_________________________________________________________');

// task4
console.log('TASK4');

function groupBy(arr, property) {
    return arr.reduce((grouped, item) => {
        const key = item[property];
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(item);
        return grouped;
    }, {});
}

const people = [
    { name: 'Alice', age: 21, dept: 'CSE' },
    { name: 'Bob', age: 25, dept: 'ECE' },
    { name: 'Charlie', age: 21, dept: 'CSE' },
    { name: 'David', age: 25, dept: 'IT' },
    { name: 'Eve', age: 22, dept: 'ECE' }
];
const groupedByAge = groupBy(people, 'age');
console.log('Grouped by age:', groupedByAge);

const groupedByDept = groupBy(people, 'dept');
console.log('Grouped by department:', groupedByDept);
console.log('_________________________________________________________');

// task5
console.log('TASK5');

function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.price, 0);
}

const cart = [
    { item: 'apple', price: 1.5 },
    { item: 'banana', price: 2.0 },
    { item: 'orange', price: 1.25 }
];

console.log('Total price of items in Cart:', calculateTotal(cart));
console.log('_________________________________________________________');

// task6
console.log('TASK6');

function findFirstEvenNumber(numbers) {
    return numbers.find(num => num % 2 === 0);
}

const numbers = [1, 3, 7, 10, 2];
console.log('The first even number is:', findFirstEvenNumber(numbers));
console.log('_________________________________________________________');

// task7
console.log('TASK7');

function findStudentByName(students, name) {
    return students.find(student => student.name === name);
}

const students = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Niya', age: 23 }
];
console.log(findStudentByName(students, 'Bob'));
console.log('_________________________________________________________');

// task8
console.log('TASK8');

function findProductByID(products, id) {
    return products.find(product => product.id === id);
}

const products = [
    { id: 101, name: 'Laptop' },
    { id: 102, name: 'Phone' },
    { id: 103, name: 'Tablet' }
];
console.log(findProductByID(products, 102));
console.log('_________________________________________________________');

// task9
console.log('TASK9');

function findOverdueTask(tasks) {
    const currentDate = new Date();
    return tasks.find(task => new Date(task.dueDate) < currentDate);
}

const tasks = [
    { taskName: 'Task 1', dueDate: '2023-06-01' },
    { taskName: 'Task 2', dueDate: '2024-05-01' },
    { taskName: 'Task 3', dueDate: '2024-01-01' }
];

console.log(findOverdueTask(tasks));




(async () => {
  // Task 1
  console.log('TASK1');
  function replaceAllOccurrences(originalString, targetSubstring, newSubstring) {
    return originalString.replaceAll(targetSubstring, newSubstring);
  }
  const inputString = 'apple banana apple grape apple';
  const result = replaceAllOccurrences(inputString, 'apple', 'orange');
  console.log(result);

  // Task 2
  console.log('TASK2');
  function includesValue(arr, value) {
    return arr.includes(value);
  }
  const fruits = ['apple', 'banana', 'Orange'];
  const searchValue = 'banana';
  console.log(includesValue(fruits, searchValue));

  // Task 3 (Async)
  console.log('TASK3');
  async function fetchDataWithFetch(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  await fetchDataWithFetch('https://jsonplaceholder.typicode.com/todos/1');

  // Task 4
  console.log('TASK4');
  function safeDivide(a, b) {
    try {
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return a / b;
    } catch (error) {
      return error.message;
    }
  }
  console.log(safeDivide(4, 2));
  console.log(safeDivide(4, 0));

  // Task 5
  console.log('TASK5');
  function introducePerson(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
  }
  console.log(introducePerson('John', 30));

  // Task 6
  console.log('TASK6');
  function logPersonDetails(person) {
    const { name, age, city } = person;
    console.log(name);
    console.log(age);
    console.log(city);
  }
  logPersonDetails({ name: 'Alice', age: 25, city: 'New York' });

  // Task 7
  console.log('TASK7');
  function sum(a, b = 10) {
    return a + b;
  }
  console.log(sum(2, 3));
  console.log(sum(5));

  // Task 8
  console.log('TASK8');
  function sumRestParams(...args) {
    return args.reduce((total, num) => total + num, 0);
  }
  console.log(sumRestParams(1, 2, 3, 4, 5));

  // Task 9
  console.log('TASK9');
  function sumNumbers(arr) {
    return arr.reduce((total, num) => total + num, 0);
  }
  console.log(sumNumbers([1, 2, 3, 4, 5]));
})();

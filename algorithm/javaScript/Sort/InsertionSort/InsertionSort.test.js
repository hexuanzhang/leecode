const { InsertionSort } = require('./InsertionSort');
const { generateRandomArray } = require('../random');

const data = generateRandomArray(1, 10, 10);
const insertionSort = new InsertionSort(data, (a, b) => a > b);

console.group('insertionSort');
console.log(`origin: ${data}`);
insertionSort.sort();
console.log(`sorted: ${insertionSort.originArray}`);
console.groupEnd('insertionSort');
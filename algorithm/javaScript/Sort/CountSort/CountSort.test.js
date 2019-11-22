const { CountSort } = require('./CountSort');
const { generateRandomArray } = require('../random');

const data = generateRandomArray(1, 10, 10);
const compareFn = (a, b) => a > b;
const countSort = new CountSort(data, compareFn);

console.group('countSort');
console.log(`origin: ${data}`);
console.log(`sorted: ${countSort.sort()}`);
console.groupEnd('countSort');
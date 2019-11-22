const { QuickSort } = require('./QuickSort');
const { generateRandomArray } = require('../random');

const data = generateRandomArray(1, 10, 10);
const quickSort = new QuickSort(data);

console.group('quickSort');
console.log(`origin: ${data}`);
console.log(`sorted: ${quickSort.sort()}`);
console.groupEnd('quickSort');
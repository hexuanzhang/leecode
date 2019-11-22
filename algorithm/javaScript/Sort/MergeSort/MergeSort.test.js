const { MergeSort } = require('./MergeSort');
const { generateRandomArray } = require('../random');

const data = generateRandomArray(1, 10, 10);
const mergeSort = new MergeSort(data);

console.group('mergeSort');
console.log(`origin: ${data}`);
console.log(`sorted: ${mergeSort.sort()}`);
console.groupEnd('mergeSort');
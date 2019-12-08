const { SelectionSort } = require('./SelectionSort');
const { generateRandomArray } = require('../random');

const data = generateRandomArray(1, 100, 10);
const selectionSort = new SelectionSort(data);

console.group('selectionSort');
console.log(`origin: ${data}`);
selectionSort.sort();
console.log(`sorted: ${selectionSort.originArray}`);
console.groupEnd('selectionSort');
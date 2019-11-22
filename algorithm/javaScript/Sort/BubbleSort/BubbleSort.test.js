const { BubbleSort } = require('./BubbleSort');
const { CocktailSort } = require('./CocktailSort');
const { generateRandomArray } = require('../random');

const data = generateRandomArray(1, 10000, 1000);
const compareFn = (a, b) => a > b;

const bubbleSort = new BubbleSort(data, compareFn);
const cocktailSort = new CocktailSort(data, compareFn);

// console.log(`origin: ${data}\n`);

console.group('bubbleSort');
bubbleSort.sort();
// console.log(`sorted: ${bubbleSort.sort()}`);
console.log(`swap count: ${bubbleSort.swapCount}\n`);
console.groupEnd('bubbleSort');

console.group('cocktailSort');
cocktailSort.sort();
// console.log(`sorted: ${cocktailSort.sort()}`);
console.log(`swap count: ${cocktailSort.swapCount}`);
console.groupEnd('cocktailSort');

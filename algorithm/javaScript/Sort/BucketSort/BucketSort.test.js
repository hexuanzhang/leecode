const { BucketSort } = require('./BucketSort');
const { generateRandomArray } = require('../random');

const data = generateRandomArray(1, 100, 10);
const compareFn = (a, b) => a > b;

const bucketSort = new BucketSort(data, compareFn);

console.group('bucketSort');
console.log(`origin: ${data}`);
console.log(`sorted: ${bucketSort.sort()}`);
console.groupEnd('bucketSort');

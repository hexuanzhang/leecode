const { ShellSort } = require('./ShellSort');
const { generateRandomArray } = require('../random');

const data = [72, 15, 100, 13, 48, 32, 88, 8, 53, 57] || generateRandomArray(1, 100, 10);
const shellSort = new ShellSort(data, (a, b) => a > b);

console.group('shellSort');
console.log(`origin: ${data}`);
shellSort.sort();
console.log(`sorted: ${shellSort.originArray}`);
console.groupEnd('shellSort');
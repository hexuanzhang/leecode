const { RadixSort } = require('./RadixSort');
const { generateRandomArray } = require('../random');

const data = generateRandomArray(1, 1000, 10);

const radixSOrt = new RadixSort(data);

console.group('radixSOrt');
console.log(`origin: ${data}`);
radixSOrt.sort()
console.log(`sorted: ${radixSOrt.originArray}`);
console.groupEnd('radixSOrt');

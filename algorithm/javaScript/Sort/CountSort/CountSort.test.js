const { CountSort } = require('./CountSort');

const length = 10;
const data = Array.from({ length }, () => Math.trunc(Math.random() * 100));

const countSort = new CountSort(data, (a, b) => a > b);
console.log(countSort.sort());
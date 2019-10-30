const { BubbleSort } = require('./BubbleSort');

const data = [6, 5, 3, 1, 2, 4, 8, 7];
const bubbleSort = new BubbleSort(data, (a, b) => a > b);

console.log(bubbleSort.sort());
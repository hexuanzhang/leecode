const { CocktailSort } = require('./CocktailSort');

const data = [6, 5, 3, 1, 2, 4, 8, 7];
const cocktailSort = new CocktailSort(data, (a, b) => a > b);

console.log(cocktailSort.sort());
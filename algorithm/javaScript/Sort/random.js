/**
 * 生成 [min, max) 之间的随机浮点数
 */
const generateRandomFloat = (min, max) => {
    return Number.parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

/**
 * 生成 [min, max] 之间的随机整数
 */
const generateRandomInteger = (min, max) => {
    return Number.parseInt(Math.random() * (max - min + 1) + min, 10);
};

/**
 * 生成随机数组
 */
const generateRandomArray = (min, max, length, isInteger = true) => {
    return Array.from({ length }, _ => isInteger ? generateRandomInteger(min, max) : generateRandomFloat(min, max));
};


module.exports = { generateRandomArray };
/*
 * @Description: 鸡尾酒排序，也叫双向冒泡排序
 * @Author: hexuan.zhang
 * @Date: 2019-10-30 11:09:51
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-11-22 12:44:56
 */

const { Sort } = require('../Sort');

/**
 * 鸡尾酒排序是冒泡排序的变种，冒泡排序是从排序队列的头到队尾进行比较，鸡尾酒排序不仅需要从队头到队尾比较，还需要从队尾到队头进行比较
 * 鸡尾酒排序的效率会比冒泡排序好一些，但交换次数也会比冒泡排序多
 *
 * @class CocktailSort
 * @extends {Sort}
 */
class CocktailSort extends Sort {
    constructor() {
        super(...arguments);
        this.swapCount = 0;
    }

    sort() {
        console.time('cocktailSort');

        const originArray = [...this.originArray];

        let swapped = false, // 元素是否发生了交换
            startIndex = 0,
            endIndex = originArray.length - 1;

        while (startIndex < endIndex) {
            swapped = false;

            // 从队头到队尾进行比较
            for (let i = startIndex; i < endIndex; i++) {
                if (this.compareFn(originArray[i], originArray[i + 1])) {
                    super.swap(originArray, i, i + 1);
                    this.swapCount++;
                    swapped = true;
                }
            }
            --endIndex;

            // 从队尾到队头进行比较
            for (let j = endIndex; j > startIndex && swapped; j--) {
                if (!this.compareFn(originArray[j], originArray[j - 1])) {
                    super.swap(originArray, j, j - 1);
                    this.swapCount++;
                    swapped = true;
                }
            }
            ++startIndex;

            if (!swapped) {
                console.timeEnd('cocktailSort');
                return originArray;
            };
        }

        console.timeEnd('cocktailSort');
        return originArray;
    }
}

exports.CocktailSort = CocktailSort;
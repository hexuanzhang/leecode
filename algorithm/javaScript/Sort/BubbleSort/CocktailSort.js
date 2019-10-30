/*
 * @Description: 鸡尾酒排序，也叫双向冒泡排序
 * @Author: hexuan.zhang
 * @Date: 2019-10-30 11:09:51
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-10-30 11:48:21
 */

const { Sort } = require('../Sort');

/**
 * 鸡尾酒排序是冒泡排序的变种，冒泡排序是从排序队列的头到队尾进行比较，鸡尾酒排序不仅需要从队头到队尾比较，还需要从队尾到队头进行比较，排序的效率会比冒泡排序好一些
 *
 * @class CocktailSort
 * @extends {Sort}
 */
class CocktailSort extends Sort {
    sort() {
        const originArray = [...this.originArray];

        let swapped = false, // 元素是否发生了交换
            startIndex = 0,
            endIndex = originArray.length - 1;

        while (startIndex < endIndex) {
            swapped = false;

            // 从队头到队尾进行比较
            for (let i = startIndex; i < endIndex; i++) {
                if (this.compareFn(originArray[i], originArray[i + 1])) {
                    [originArray[i], originArray[i + 1]] = [originArray[i + 1], originArray[i]];
                    swapped = true;
                }
            }
            --endIndex;

            // 从队尾到队头进行比较
            for (let j = endIndex; j > startIndex && swapped; j--) {
                if (!this.compareFn(originArray[j], originArray[j - 1])) {
                    [originArray[j - 1], originArray[j]] = [originArray[j], originArray[j - 1]];
                    swapped = true;
                }
            }
            --endIndex;

            if (!swapped) return originArray;
        }

        return originArray;
    }
}

exports.CocktailSort = CocktailSort;
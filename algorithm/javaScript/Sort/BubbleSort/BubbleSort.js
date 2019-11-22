/*
 * @Description: 冒泡排序算法
 * @Author: hexuan.zhang
 * @Date: 2019-10-29 18:34:36
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-11-22 12:34:28
 */

const { Sort } = require('../Sort');

/**
 * 冒泡排序思路：遍历排序队列，比较相邻的两个元素，根据大小进行位置交换，将最大或最小的元素交换至队尾；重复之前的过程，直至没有所有元素已排好序（没有要交换的元素）
 * 平均时间复杂度为：O(n^2)
 *
 * @class BubbleSort
 * @extends {Sort}
 */
class BubbleSort extends Sort {
    constructor() {
        super(...arguments);
        this.swapCount = 0;
    }

    sort() {
        console.time('bubbleSort');
        const originArray = [...this.originArray],
            length = originArray.length;

        // 元素是否发生了交换
        let swapped = false;
        for (let i = 0; i < length; i++) {
            swapped = false;

            for (let j = 0; j < length; j++) {
                if (this.compareFn(originArray[j], originArray[j + 1])) {
                    super.swap(originArray, j, j + 1);
                    this.swapCount++;
                    swapped = true;
                }
            }

            if (!swapped) break;
        }

        console.timeEnd('bubbleSort');
        return originArray;
    }
}

exports.BubbleSort = BubbleSort;
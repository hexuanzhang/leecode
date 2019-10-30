/*
 * @Description: 冒泡排序算法
 * @Author: hexuan.zhang
 * @Date: 2019-10-29 18:34:36
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-10-30 10:41:40
 */

const { Sort } = require('../Sort');

/**
 * 冒泡排序思路：遍历排序队列，比较相邻的两个元素，根据大小进行位置交换，将最大或最小的元素交换至队尾；重复之前的过程，直至没有所有元素已排好序（没有要交换的元素）
*/
class BubbleSort extends Sort {
    /**
     * @param {*} originArray 待排序的数组
     * @param {*} compareFn 元素顺序比较方法
     * @memberof Sort
     */
    constructor(originArray, compareFn) {
        super(originArray, compareFn);
    }

    sort() {
        const originArray = [...this.originArray],
            length = originArray.length;

        // 元素是否发生了交换
        let swapped = false;
        for (let i = 0; i < length; i++) {
            swapped = false;

            for (let j = 0; j < length; j++) {
                if (this.compareFn(originArray[j], originArray[j + 1])) {
                    [originArray[j], originArray[j + 1]] = [originArray[j + 1], originArray[j]];
                    swapped = true;
                }
            }

            if (!swapped) break;
        }

        return originArray;
    }
}

exports.BubbleSort = BubbleSort;
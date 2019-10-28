/*
 * @Description: 归并排序算法
 * @Author: hexuan.zhang
 * @Date: 2019-10-25 23:56:42
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-10-28 18:49:34
 */

const { Sort } = require('../Sort');

/**
 * 归并排序思路：采用分治的思想，先将待排序数组递归地拆分为两半分别排序，然后将排序结果进行归并
 */

class MergeSort extends Sort {
    sort(originArray = this.originArray) {
        const length = originArray.length || 0;

        if (length <= 1) return originArray;

        /**
         * 将原数组进行对半拆分，分别对拆分后的数组进行排序，然后归并
         */
        const mindleIndex = Math.floor(length / 2);
        const leftArray = this.sort(originArray.slice(0, mindleIndex));
        const rightArray = this.sort(originArray.slice(mindleIndex, length));

        return this.merge(leftArray, rightArray);
    }

    /**
     * 将已排序的数组进行合并
    */
    merge(leftArray, rightArray) {
        const result = [];

        /**
         * 如果 leftArray、rightArray 其中一个数组中的元素已全部放入 result，则结束循环，将剩余的那个数组中的元素放入 result
         */
        while (leftArray.length && rightArray.length) {
            let element = void 0;

            // 比较 leftArray、rightArray 第一个元素，将较小的元素从相应数组中移除，放入 result
            element = this.compareFn(leftArray[0], rightArray[0]) ? leftArray.shift() : rightArray.shift();
            result.push(element);
        }

        // 将剩余的那个数组中的元素放入 result
        leftArray.length && result.push(...leftArray);
        rightArray.length && result.push(...rightArray);

        return result;
    }
}

module.exports.MergeSort = MergeSort;

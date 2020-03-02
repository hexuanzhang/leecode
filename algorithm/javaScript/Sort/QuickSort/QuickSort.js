/*
 * @Description: 快速排序
 * @Author: hexuan.zhang
 * @Date: 2019-11-22 14:18:16
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-12-02 22:18:00
 */

const { Sort } = require('../Sort');

/**
 * 快速排序的思路：采用分治的思想，对数组按基准值进行划分，小于基准值的放左侧，大于基准值的放右侧
 *  1. 找到基准值
 *  2. 对划分后的两个子数组也进行快排
 *
 * @class QuickSort
 * @extends {Sort}
 */
class QuickSort extends Sort {
    sort(originArray = this.originArray, startIndex = 0, endIndex = this.originArray.length - 1) {
        if (startIndex < endIndex) {
            let pivotIndex = this.partition(originArray, startIndex, endIndex);

            this.sort(originArray, startIndex, pivotIndex - 1);
            this.sort(originArray, pivotIndex + 1, endIndex);
        }

        return originArray;
    }

    /**
     * 根据基准值对数组在 [startIndex, endIndex] 范围内的元素进行划分
     *
     * @param {Array} array
     * @param {Integer} startIndex
     * @param {Integer} endIndex
     * @returns {Integer} pivotIndex 返回最接近基准值的索引位置
     */
    partition(array, startIndex, endIndex) {
        const pivotIndex = startIndex + Math.ceil((endIndex - startIndex) / 2),
            pivot = array[pivotIndex];

        this.swap(array, pivotIndex, endIndex);
        let newPivotIndex = startIndex; // 最接近基准的元素位置，默认在初始位置
        for (let i = startIndex; i < endIndex; i++) {
            if (array[i] < pivot) {
                super.swap(array, i, newPivotIndex);
                newPivotIndex++;
            }
        }
        this.swap(array, newPivotIndex, endIndex);

        return newPivotIndex;
    }
}

exports.QuickSort = QuickSort;
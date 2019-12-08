/*
 * @Description: 选择排序
 * @Author: hexuan.zhang
 * @Date: 2019-12-03 21:09:46
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-12-03 21:30:11
 */

const { Sort } = require('../Sort');

/**
 * 思路: 遍历待排序序列，找到其中的最（大、小）值元素，将其放入左侧；然后在剩余序列中继续找到其中的最值元素，也放入左侧
 *
 * @class SelectionSort
 * @extends {Sort}
 */
class SelectionSort extends Sort {
    sort() {
        for (let i = 0; i < this.originArray.length; i++) {

            let extremeValueIndex = i; // 最(大、小)值索引位置
            for (let j = i + 1; j < this.originArray.length; j++) {
                if (this.compareFn(this.originArray[j], this.originArray[extremeValueIndex])) {
                    extremeValueIndex = j;
                }
            }

            // 将最(大、小)值放入左侧
            super.swap(this.originArray, i, extremeValueIndex);
        }
    }
}

exports.SelectionSort = SelectionSort;
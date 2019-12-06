/*
 * @Description: 插入排序
 * @Author: hexuan.zhang
 * @Date: 2019-12-02 20:37:19
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-12-02 23:23:48
 */
const { Sort } = require('../Sort');

/**
 * 插入排序的思路与摸牌时按牌大小排放的方式一样：
 *  1. 默认第一张元素有序
 *  2. 取下一个元素，与之前已排序的元素进行从后往前的比较
 *  3. 如果已排序元素大于待排序新元素，则将该元素位置往后移一位；如果已排序元素小于等于新元素，那么将新元素插入到该元素位置后面
 *  4. 剩余的待排序元素重复上面的过程
 *
 * @class InsertionSort
 * @extends {Sort}
 */
class InsertionSort extends Sort {
    sort() {
        for (let i = 1; i < this.originArray.length; i++) {
            // 待排序元素
            let sortingNum = this.originArray[i];

            // 将 originArray[i] 插入到 originArray[1 ~ i-1] 中
            // for (let j = i; j > 0; j--) {
            //     if (this.compareFn(this.originArray[j - 1], this.originArray[j])) {
            //         super.swap(this.originArray, j, j - 1);
            //     } else {
            //         break;
            //     }
            // }

            // [0, i-1] 是已排序序列，从后往前与待排序元素比较
            for (let j = (i - 1); i >= 0; j--) {
                if (this.compareFn(this.originArray[j], sortingNum)) { // 已排序元素大于待排序元素，将该元素位置往后移一位
                    this.originArray[j + 1] = this.originArray[j];
                } else { // 已排序元素小于或等于待排序元素，将新元素插入到该元素位置后面
                    this.originArray[j + 1] = sortingNum;
                    break;
                }
            }
        }
    }
}

exports.InsertionSort = InsertionSort;
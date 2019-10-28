/*
 * @Description: Sort 类
 * @Author: hexuan.zhang
 * @Date: 2019-10-27 21:08:11
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-10-28 18:43:59
 */

class Sort {
    /**
     * @param {*} originArray 待排序的数组
     * @param {*} compareFn 元素顺序比较方法
     * @memberof Sort
     */
    constructor(originArray, compareFn) {
        this.originArray = originArray;

        const defaultFn = (a, b) => a <= b;
        this.compareFn = compareFn || defaultFn;
    }

    sort() { }
}

module.exports.Sort = Sort;

/*
 * @Description: Sort 类
 * @Author: hexuan.zhang
 * @Date: 2019-10-27 21:08:11
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-11-22 11:14:01
 */

/**
 *
 *
 * @class Sort
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
        this.compareFn = typeof compareFn === 'function' ? compareFn : defaultFn;
    }

    sort() { }

    /**
     * 交换数组中 indexA、indexB 的元素
     *
     * @param {*} array
     * @param {*} indexA
     * @param {*} indexB
     * @memberof Sort
     */
    swap(array, indexA, indexB) {
        [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
    }
}

module.exports.Sort = Sort;

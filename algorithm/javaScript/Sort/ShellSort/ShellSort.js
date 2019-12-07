/*
 * @Description: 希尔排序
 * @Author: hexuan.zhang
 * @Date: 2019-12-02 20:25:50
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-12-02 23:15:22
 */
const { Sort } = require('../Sort');

/**
 * 希尔排序的主要思想是使数组中任意间隔为 gap 的元素都是有序的
 *  1. 选择一个增量 gap，将待排序序列划分为若干个长度为 gap 的子序列
 *  2. 通过插入排序，确保子序列有序
 *  3. 减小增加 gap，重复上诉步骤
 *
 * @class ShellSort
 * @extends {Sort}
 */
class ShellSort extends Sort {
    sort() {
        const length = this.originArray.length;

        let ratio = 3, // 划分序列系数，目前没有统一的最优划分方式，常见的一般为 1/2 ~ 1/3 之间
            gap = 1;
        while (gap < (length / ratio)) {
            gap = gap * ratio + 1; // 动态定义区间
        }

        while (gap > 0) {
            // 确保长度为 gap 的子序列有序
            for (let i = gap; i < length; i++) {

                // 将 originArray[i] 插入到 originArray[i - gap], originArray[i - 2*gap], originArray[i - 3*gap]... 中
                for (let j = i; j >= gap; j -= gap) {
                    if (this.compareFn(this.originArray[j - gap], this.originArray[j])) {
                        super.swap(this.originArray, j, j - gap);
                    } else {
                        break;
                    }
                }
            }

            // 缩小区间
            gap = Math.floor(gap / ratio);
        }

    }
}

exports.ShellSort = ShellSort;

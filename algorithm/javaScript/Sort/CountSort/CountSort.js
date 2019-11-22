/*
 * @Description: 计数排序
 * @Author: hexuan.zhang
 * @Date: 2019-10-30 12:00:25
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-11-22 16:59:11
 */

const { Sort } = require('../Sort');

/**
 * 计数排序的主要思路：
 *  1. 获取待排序的数组 A 的最大值（Max）及最小值(Min)
 *  2. 新建长度为 Max - Min + 1 的数组 B，用于记录每个元素出现的次数
 *  3. 将数组 B 中每个值与前一项相加，这样 B[A[i]] 就表示数组 A 中小于等于 A[i] 的元素个数
 *  4. 反向填充数组 C：将数组元素 A[i] 放在数组 C 的第 B[A[i]] 个位置（索引位置：B[A[i]] - 1），每放一次，B[A[i]] 减一
 *  5. 返回数组 C
 *
 * 计数排序
 *
 * @class CountSort
 * @extends {Sort}
 */
class CountSort extends Sort {
    sort() {
        const originArray = this.originArray;

        // 1. 获取 originArray 数组中的最大值和最小值
        const min = Math.min(...this.originArray),
            max = Math.max(...this.originArray);

        // 2. 创建统计数组，默认每个数值出现的次数都为 0
        let countArray = Array(max - min + 1).fill(0);

        // 3. 编辑 originArray，记录每个数值出现的次数
        originArray.forEach(num => {
            const index = num - min; // 数值 num 在 countArray 中的索引位置

            countArray[index] += 1;
        });

        // 4. 将数组 countArray 中每个值与前一项相加，countArray[originArray[i]] 就表示 originArray 中小于等于 originArray[i] 的元素个数
        countArray.forEach((count, index) => {
            if (index > 0) countArray[index] += countArray[index - 1];
        });

        // 5. 反向填充 result：
        let result = [];
        originArray.forEach(num => {
            const count = countArray[num - min]; // countArray[num] 表示 originArray 中小于等于 num 的个数

            const index = count - 1; // 小于等于 num 的个数有 count 个，那么 num 在排序后的数组中的索引位置就是 count - 1
            result[index] = num;

            countArray[num - min] -= 1; // 将 num 插入排序数组中后，小于等于 num 的个数 countArray[num] 要减一
        });

        return result;
    }
}

exports.CountSort = CountSort;
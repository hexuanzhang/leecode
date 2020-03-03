const { Sort } = require('../Sort');

/**
 * 基数排序的思想是分配排序，将待排序的元素按照规则分配到对应的桶中，最后进行组合
 *
 * @class RadixSort
 * @extends {Sort}
 */
class RadixSort extends Sort {
    sort() {
        const max = Math.max(...this.originArray);
        const maxDigit = `${max}`.length; // 获取待排序数组中最大值的最高位数

        // 按 LSD 方式进行分配排序
        for (let i = 0; i < maxDigit; i++) {
            this.bucketSort(i);
        }
    }

    /**
     * 对待排序元素进行按位桶排序
     *
     * @param {number} digit 当前排序的位置（个位、十位、百位...）
     * @memberof RadixSort
     */
    bucketSort(digit) {
        const min = Math.pow(10, digit); // 当前位数最小的值

        let buckets = Array.from({ length: 10 }, () => []);
        this.originArray.forEach(num => {
            if (num >= min) {
                const numStr = `${num}`;
                const index = numStr[`${numStr.length - digit - 1}`]; // 获取 num 在对应位置的值
                buckets[index].push(num);
            } else {
                // num 小于当前位置的最小值时，说明当前 num 在对应位置的数值为 0
                // 如 num 为 5，当前对十位进行排序时，5 < 10, 表示 5 对应的十位的数值为 0
                buckets[0].push(num);
            }
        })

        this.originArray = buckets.reduce((prev, current) => prev.concat(current), []);
    }
}

exports.RadixSort = RadixSort;
/*
 * @Description: 桶排序
 * @Author: hexuan.zhang
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2020-03-02 17:19:41
 */

const { Sort } = require('../Sort');

/**
 * 桶排序步骤：
 *  1. 设定对应的空桶数
 *  2. 将待排序元素放入对应的桶中
 *  3. 对桶内元素进行排序
 *  4. 组合所有桶内元素
 *
 * @class BucketSort
 * @extends {Sort}
 */
class BucketSort extends Sort {

    /**
     * @param {number} [bucketCount=10] 桶的数量默认为 10
     * @memberof BucketSort
     */
    sort(bucketCount = 10) {
        const max = Math.max(...this.originArray),
            min = Math.min(...this.originArray);

        const bucketSize = Math.floor((max - min) / bucketCount) + 1; // 桶大小（存放的元素区间跨度）

        let buckets = Array.from({ length: bucketCount }, () => []);
        this.originArray.forEach(num => {
            const bucketIndex = ~~((num - min) / bucketSize); // 元素 num 的位置

            const currentBucket = buckets[bucketIndex];
            if (currentBucket.length > 0) {
                // 从后往前遍历当前桶内元素，查找 num 应该插入的位置
                let index = currentBucket.length - 1;
                while (index >= 0 && this.compareFn(currentBucket[index], num)) {
                    index--;
                }

                currentBucket.splice(index + 1, 0, num);
            } else {
                buckets[bucketIndex].push(num);
            }
        });

        // 判断是升序排序还是降序排序
        buckets = this.compareFn(1, 0) ? buckets : buckets.reverse();

        // 组合所有桶内已排序元素
        return buckets.reduce((prev, current) => prev.concat(current), []);
    }
}

exports.BucketSort = BucketSort;
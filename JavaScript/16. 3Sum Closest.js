/*
 * @Description: 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * @Address：https://leetcode.com/problems/3sum-closest/ | https://leetcode-cn.com/problems/3sum-closest/
 * @Author: hexuan.zhang
 * @Date: 2019-10-22 23:49:16
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-11-01 15:24:37
 */

/**
 * 思路； 对原数组进行排序，然后固定其中一个元素，通过双指针寻找另外两个元素
 *  1. 对数组进行排序，并初始化返回结果 result=num[0]+nums[1]+nums[2]
 *  2. 从[i, length-2]遍历排序后数组，length - 2 是为了防止数组越界
 *      2.1 设置双指针 startIndex=i+1、endIndex=length-1 的开始位置
 *      2.2 记录当前三个索引位置的总和 sum = nums[i]+nums[startIndex]+nums[endIndex]
 *      2.2 比较 result-target 与 sum-taregt 的大小，用值小者当作返回值
 *      2.3 比较 sum 与 target 之间的大小，根据大小移动指针
 *
 * 优化：
 *  1. 在遍历过程中，如果 i 和 i-1 的值相同，根据题意（只有一个答案）则可以跳过 i，减少比较次数
 *  2. 同理，在移动双指针 startIndex、endIndex 时，如果前后值一样，也可以跳过
 *  3. 在每次遍历过程中，不管如何移动双指针，三者的和都有一个在一个范围内 [nums[i]+nums[startIndex]+nums[startIndex+1], nums[i]+nums[length-2]+nums[length-1]],
 *     可以先将最大值、最小值与 target 进行比较，如果最小值都比 target 大或者最大值比 target 小，就不需要移动指针了，直接比较 min、max 与 target 直接的距离
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
    nums = nums.sort((a, b) => a - b);

    let result = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        let startIndex = i + 1,
            endIndex = nums.length - 1;

        // 跳过重复数据
        if (i > 0 && Object.is(nums[i], nums[i - 1])) continue;

        while (startIndex < endIndex) {
            // 双指针在 [startIndex, endIndex] 之间移动时所能取到的最大值及最小值
            const min = nums[i] + nums[startIndex] + nums[startIndex + 1],
                max = nums[i] + nums[endIndex - 1] + nums[endIndex];

            // 如果 target 比最小值小，则不需要再进行移动
            if (min > target) {
                if (Math.abs(min - target) < Math.abs(result - target)) result = min;
                break;
            }

            // 如果 target 比最大值还大，也不需要再进行移动
            if (max < target) {
                if (Math.abs(max - target) < Math.abs(result - target)) result = max;
                break;
            }

            const sum = nums[i] + nums[startIndex] + nums[endIndex];

            // 比较当前元素总和与 target 的距离、之前元素总和与 target 的距离之间大小，如果前者更小，则进行替换
            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }

            if (Object.is(sum, target)) {
                return sum;
            } else if (sum > target) { // sum 大于 target，为了缩小 sum 与 target 之间的距离，需要减小 sum
                endIndex--;

                // 跳过重复数据
                while (Object.is(nums[endIndex], nums[endIndex + 1])) endIndex--;
            } else { // sum 大于 target，为了缩小 sum 与 target 之间的距离，需要增大 sum
                startIndex++;

                // 跳过重复数据
                while (Object.is(nums[startIndex], nums[startIndex - 1])) startIndex++;
            }
        }
    }

    return result;
};
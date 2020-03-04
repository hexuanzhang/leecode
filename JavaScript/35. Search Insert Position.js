/*
 * @Description: 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * @Address: https://leetcode.com/problems/search-insert-position/ | https://leetcode-cn.com/problems/search-insert-position/
 * @Author: hexuan.zhang
 * @Date: 2019-12-11 17:57:20
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2020-03-04 15:00:33
 */

/**
 *  思路：直接遍历整个数组，查找目标元素，如果未找到则进行插入操作
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            // 如果 nums[i] 大于 target, 则先将 target 插入到 i 的位置
            return i;
        } else if (Object.is(i, nums.length - 1)) {
            // 数组内所有元素都小于 target，则将 target 插入到数组末尾
            return nums.length;
        }
    }
};

// 采用二分法进行查找
const searchInsert2 = (nums, target) => {
    let startIndex = 0,
        endIndex = nums.length - 1;

    // 判断数组是升序还是降序
    const isAscend = nums[startIndex] <= nums[endIndex];

    while (startIndex <= endIndex) {
        const midIndex = ~~((startIndex + endIndex) / 2);
        if (Object.is(nums[midIndex], target)) {
            return midIndex;
        } else if (nums[midIndex] < target) {
            isAscend ? startIndex++ : endIndex--;
        } else {
            isAscend ? endIndex-- : startIndex++;
        }
    }

    return startIndex;
}
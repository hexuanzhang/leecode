/*
 * @Description: 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置
 * @Address: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/ | https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @Author: hexuan.zhang
 * @Date: 2019-12-10 21:28:33
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-12-10 22:13:34
 */
/**
 * 思路：题目要求时间复杂度为 O(logn)，那么考虑二分法查找
 *  1. 找到第一个等于 target 的元素索引
 *  2. 找到最后一个等于 target 的元素索引
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
    let result = [-1, -1];

    if (Object.is(nums.length, 0)) return result;

    if (Object.is(nums.length, 1)) return Object.is(nums[0], target) ? [0, 0] : result;

    result = [searchIndex(nums, target, true), searchIndex(nums, target, false)];

    return result;
};

/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @param {boolean} flag true-在 nums 中找到第一个等于 target 的元素索引， false-在 nums 中找最后一个等于 target 的元素索引
 * @return {number}
 */
const searchIndex = (nums, target, flag) => {
    let result = -1;

    let lowIndex = 0,
        highIndex = nums.length - 1;

    while (lowIndex <= highIndex) {
        const middleIndex = Math.ceil((lowIndex + highIndex) / 2);

        if (Object.is(nums[middleIndex], target)) {
            result = middleIndex;
            flag ? (highIndex = middleIndex - 1) : (lowIndex = middleIndex + 1);
        } else if (nums[middleIndex] > target) {
            highIndex = middleIndex - 1;
        } else {
            lowIndex = middleIndex + 1;
        }
    }

    return result;
}
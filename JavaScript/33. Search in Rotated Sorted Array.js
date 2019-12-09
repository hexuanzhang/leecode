/*
 * @Description: 假设按照升序排序的数组在预先未知的某个点上进行了旋转，在这个扭转的数组上搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * @Address: https://leetcode.com/problems/search-in-rotated-sorted-array/ | https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * @Author: hexuan.zhang
 * @Date: 2019-12-09 20:54:20
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-12-09 23:06:32
 */

/**
 * 思路：题目要求事件复杂度为 O(log n)，因而考虑二分查找；
 *  1. 如果 nums[0] < nums[mid], 则说明 [0, mid] 区间是增序区间
 *      1.1 如果 nums[0] < target < nums[mid]，那么在 [0, mid] 之间查找；反之，在 [mid + 1, length - 1] 之间查找
 *  2. 如果 nums[mid] < nums[0]，那么说明 [0, mid] 区间存在旋转, [mid, length - 1] 区间是增序区间
 *      2.1 如果 nums[mid] < target < nums[length - 1] < nums[0] 时，那么在 [mid, length - 1] 之间查找
 *      2.2 如果 target < nums[mid] < nums[0] 时，则在 [0, mid] 之间查找
 *      2.3 如果 nums[0] < target 时，也在 [0, mid] 之间查找
 *
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
const search = (nums, target) => {
    let lowIndex = 0,
        highIndex = nums.length - 1;

    while (lowIndex <= highIndex) {
        const middleIndex = Math.ceil((lowIndex + highIndex) / 2);

        if (Object.is(nums[middleIndex], target)) return middleIndex;

        if (nums[lowIndex] < nums[middleIndex]) { // [lowIndex, middleIndex] 是增序区间
            if (target >= nums[lowIndex] && target < nums[middleIndex]) { // target 处于 [0, middleIndex] 之间
                highIndex = middleIndex - 1;
            } else {
                lowIndex = middleIndex + 1;
            }
        } else { // [lowIndex, middleIndex] 存在旋转，也就是 [middleIndex， length - 1] 是增序区间
            if (target > nums[middleIndex] && target <= nums[highIndex]) {
                lowIndex = middleIndex + 1;
            } else {
                highIndex = middleIndex - 1;
            }
        }
    }

    return -1;

};

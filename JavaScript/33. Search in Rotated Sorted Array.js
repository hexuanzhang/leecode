/*
 * @Description: 假设按照升序排序的数组在预先未知的某个点上进行了旋转，在这个扭转的数组上搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * @Address: https://leetcode.com/problems/search-in-rotated-sorted-array/ | https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * @Author: hexuan.zhang
 * @Date: 2019-12-09 20:54:20
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-12-09 23:46:58
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


/**
 * 分析上面版本的判断逻辑：
 *  1. lowIndex = middleIndex + 1 的情况有以下两种
 *      1.1 nums[lowIndex] > nums[middleIndex] && target > nums[middleIndex] && target <= nums[highIndex]
 *      1.2 nums[lowIndex] < nums[middleIndex] && (target > nums[middleIndex] || target < nums[lowIndex])
 *  2. hightIndex = middleIndex - 1 的情况有
 *      2.1 nums[lowIndex] < nums[middleIndex] && target >= nums[lowIndex] && target < nums[middleIndex]
 *      2.2 nums[lowIndex] > nums[middleIndex] && (target >= nums[lowIndex] || target < nums[middleIndex])
 *
 *  3. 假设 a = nums[lowIndex] > nums[middleIndex], b = target > nums[middleIndex], c = target < nums[lowIndex]，可以将 1 的情况归纳为
 *      3.1 a、b、c 同时为真
 *      3.2 a 为假，b 或 c 为真
 *      3.3 综上所述，a ^ b ^ c
 *
 *  4. 同理，假设 a = nums[lowIndex] < nums[middleIndex], b = target >= nums[lowIndex], c = target < nums[middleIndex], 可以将 2 的情况归纳为
 *      4.1 a、b、c 同时为真
 *      4.2 a 为假，b 或 c 为真
 *      4.3 综上所述，a ^ b ^ c
 *
 * 精简版
 */
const search = () => {
    let lowIndex = 0,
        highIndex = nums.length - 1;

    while (lowIndex <= highIndex) {
        const middleIndex = Math.ceil((lowIndex + highIndex) / 2);

        if (Object.is(nums[middleIndex], target)) return middleIndex;

        if ((nums[lowIndex] > nums[middleIndex]) ^ (target > nums[middleIndex]) ^ (target < nums[lowIndex])) {
            lowIndex = middleIndex + 1;
        } else {
            highIndex = middleIndex - 1;
        }

        // if ((nums[lowIndex] < nums[middleIndex]) ^ (target >= nums[lowIndex]) ^ (target < nums[middleIndex])) {
        //     highIndex = middleIndex - 1;
        // } else {
        //     lowIndex = middleIndex + 1;
        // }
    }

    return -1;
}

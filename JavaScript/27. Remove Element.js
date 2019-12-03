/*
 * @Description: 给定一个数组 nums 和一个值 val，在原地移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * @Address: https://leetcode.com/problems/remove-element/ | https://leetcode-cn.com/problems/remove-element/
 * @Author: hexuan.zhang
 * @Date: 2019-12-03 09:37:41
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-12-03 10:32:42
 */

/**
 * 思路：解法与上一题相似，遍历数组将与 val 不一致的元素覆盖放于数组左侧
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    let index = 0;  // nums[index] 之前的元素都不与 val 相等

    for (let num of nums) {
        if (!Object.is(num, val)) {
            nums[index] = num;
            index++;
        }
    }

    nums.splice(index);

    return nums.length;
};
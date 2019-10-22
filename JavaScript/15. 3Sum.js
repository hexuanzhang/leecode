/*
 * @Description: 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0; 如果存在，则找出所有满足条件且不重复的三元组
 * @Address: https://leetcode.com/problems/3sum/ | https://leetcode-cn.com/problems/3sum/
 * @Author: hexuan.zhang
 * @Date: 2019-10-19 22:56:25
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-10-22 23:55:37
 */

/**
 *  思路：最容易想到的是三层循环，暴力破解，需要注意的是要对结果进行去重
 *
* @param {number[]} nums
* @return {number[][]}
*/
const threeSum = (nums) => {
    if (nums.length < 3) return [];
};
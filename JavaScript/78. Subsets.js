/*
 * @Description: 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * @Address: https://leetcode.com/problems/subsets/ | https://leetcode-cn.com/problems/subsets/
 * @Author: hexuan.zhang
 * @Date: 2019-11-28 17:33:08
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-11-28 18:47:18
 */

/**
 * 思路：采用回溯法
 *  1. 每个数字只有两种状态，选和不选
 *  2. 选取一个数字后，记录组合，然后递归的找下一个数字
 *  3. 注意要进行回溯
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
    let result = [];

    backtrace(0, nums, [], result);

    return result;
};

/**
 *
 *
 * @param {*} startIndex 起始查找位置
 * @param {*} nums 原数组
 * @param {*} set 子集
 * @param {*} result 子集集合
 */
const backtrace = (startIndex, nums, set, result) => {
    result.push([...set]);

    for (let i = startIndex; i < nums.length; i++) {
        // 选择当前元素
        set.push(nums[i]);

        backtrace(i + 1, nums, set, result);

        // 进行回溯
        set.pop();
    }
}
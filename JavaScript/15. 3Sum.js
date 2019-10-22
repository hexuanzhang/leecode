/*
 * @Description: 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0; 如果存在，则找出所有满足条件且不重复的三元组
 * @Address: https://leetcode.com/problems/3sum/ | https://leetcode-cn.com/problems/3sum/
 * @Author: hexuan.zhang
 * @Date: 2019-10-19 22:56:25
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-10-23 00:13:14
 */

/**
 *  思路：最容易想到的是三层循环，暴力破解，需要注意的是要对结果进行去重
 *      这种方法虽然能行得通，但跑用例的时候会出现超时的情况，需要优化
 *
* @param {number[]} nums
* @return {number[][]}
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    if (nums.length < 3) return [];

    const map = new Map();
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (Object.is(nums[i] + nums[j] + nums[k], 0)) {
                    const group = [nums[i], nums[j], nums[k]],
                        key = group.sort().toString();

                    map.has(key) || map.set(key, group);
                }
            }
        }
    }

    return Array.from(map.values());
};
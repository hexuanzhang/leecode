/*
 * @Description: 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0; 如果存在，则找出所有满足条件且不重复的三元组
 * @Address: https://leetcode.com/problems/3sum/ | https://leetcode-cn.com/problems/3sum/
 * @Author: hexuan.zhang
 * @Date: 2019-10-19 22:56:25
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-10-31 15:30:45
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

/**
 * 1. 对待排序数组 A 从小到大进行排序
 * 2. 将 a + b + c = 0 转换为 b + c = -a，遍历排序数组 B；固定 a = B[i]，然后采用双指针的思想，从 [i+1, B.length - 1] 范围内找到合适 b 和 c
 * 3. 处理重复情况
*/
const threeSum = (nums) => {
    const length = nums.length;
    if (!length || length < 3) return [];

    // 按从小到大进行排序
    nums = nums.sort((a, b) => a - b);

    // 处理最小的元素大于 0 或者最大的元素小于 0 的场景
    if (nums[0] > 0 || nums[length - 1] < 0) return [];

    let result = [];
    for (let i = 0; i < length; i++) {
        // 第一个数大于 0，那么三个数之和肯定大于 0
        if (nums[i] > 0) break;

        // 去重处理
        if (i > 0 && Object.is(nums[i], nums[i - 1])) continue;

        let startIndex = i + 1,
            endIndex = length - 1;

        while (startIndex < endIndex) {
            const sum = nums[i] + nums[startIndex] + nums[endIndex];

            if (Object.is(sum, 0)) {
                result.push([nums[i], nums[startIndex++], nums[endIndex--]]);

                // 对重复元素进行去重
                while (Object.is(nums[startIndex], nums[startIndex - 1])) startIndex++;
                while (Object.is(nums[endIndex], nums[endIndex + 1])) endIndex--;
            } else if (sum > 0) { // a + b + c > 0, a 是固定 nums[i]，b 比 c 小，需要让 c 变小
                endIndex--;
            } else { // a + b + c < 0, a 是固定 nums[i]，c 比 b 大，需要让 b 变大
                startIndex++;
            }
        }
    }

    return result;
}
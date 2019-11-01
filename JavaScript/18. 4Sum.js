/*
 * @Description: 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * @Adddress: https://leetcode.com/problems/4sum/ | https://leetcode-cn.com/problems/4sum/
 * @Author: hexuan.zhang
 * @Date: 2019-10-25 23:52:26
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-11-01 18:52:06
 */

/**
 * 思路：使用双循环固定两个数，用双指针找另外两个数，通过与 target 比较，移动双指针
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
    const length = nums.length;
    if (!length || length < 4) return [];

    // 按从小到大进行排序
    nums = nums.sort((a, b) => a - b);

    let result = [];
    for (let i = 0; i < length - 3; i++) {
        // 去重
        if (i > 0 && nums[i] == nums[i - 1]) continue;

        // 最小值都大于 target，那么就不需要进行查找
        if ((nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3]) > target) break;

        // 最大值都小于 target，说明 num[i] 太小，需要遍历下一个
        if ((nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1]) < target) continue;

        for (let j = i + 1; j < length - 2; j++) {
            // 去重
            if (j - i > 1 && nums[j] == nums[j - 1]) continue;

            // 最小值都大于 target，那么就不需要进行查找
            if ((nums[i] + nums[j] + nums[j + 1] + nums[j + 2]) > target) break;

            // 最大值都小于 target，说明 num[j] 太小，需要遍历下一个
            if ((nums[i] + nums[j] + nums[length - 2] + nums[length - 1]) < target) continue;

            let startIndex = j + 1,
                endIndex = length - 1;

            while (startIndex < endIndex) {
                const sum = nums[i] + nums[j] + nums[startIndex] + nums[endIndex];

                if (Object.is(sum, target)) {
                    result.push([nums[i], nums[j], nums[startIndex++], nums[endIndex++]]);

                    while (Object.is(nums[startIndex], nums[startIndex - 1])) startIndex++;
                    while (Object.is(nums[endIndex], nums[endIndex + 1])) endIndex--;
                } else if (sum > target) { // a + b + c + d > target, a, b 固定，需要减少 c + d 的和
                    endIndex--;
                } else { // a + b + c + d < target, a, b 固定，需要增加 c + d 的和
                    startIndex++
                }
            }
        }
    }

    return result;
};
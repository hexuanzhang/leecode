/*
 * @Description: 给定一个排序数组，在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度
 * @Address: https://leetcode.com/problems/remove-duplicates-from-sorted-array/ | https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @Author: hexuan.zhang
 * @Date: 2019-12-02 11:37:41
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-12-02 14:34:54
 */

/**
 * 思路：有序的数组，重复的元素必然是相邻的；删除重复元素，可以找到一个删除一个，也可以将重复的元素替换；
 *      也就是将不不重复元素往左侧放
 *  1. 采用两个指针，第一个指针 startIndex 放在不不重复的元素最后位置上，默认在第一个元素位置
 *  2. 第二个指针 endIndex 在遍历过程中往右侧移动，默认在第二个元素位置
 *  3. 如果 startIndex 上的元素与 endIndex 元素不一致，则将 endIndex 放在 startIndex + 1 的位置，同时 startIndex 往后移一位
 *  4. 如果 startIndex 上的元素与 endIndex 元素不一致，则直接将 endIndex 往后移一位
 *
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    if (nums.length <= 1) return nums.length;

    let startIndex = 0;
    for (let endIndex = 1; endIndex < nums.length; endIndex++) {
        if (!Object.is(nums[startIndex], nums[endIndex])) {
            /**
             * 如果 endIndex 与 startIndex 上的元素不一致且不相邻时，进行复制移位操作
             * endIndex 和 startIndex 相邻，就没必要复制移位
             */
            if (endIndex - startIndex > 1) {
                // 将 endIndex 上的元素复制至 startIndex + 1 位置，startIndex 往后移一位
                nums[startIndex + 1] = nums[endIndex];
            }

            startIndex++;
        }
    }

    nums.splice(startIndex + 1);

    return nums.length;
};
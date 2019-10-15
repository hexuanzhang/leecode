/*
 * @Description: 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * @Address: https://leetcode.com/problems/container-with-most-water/ | https://leetcode-cn.com/problems/container-with-most-water/
 * @Author: hexuan.zhang
 * @Date: 2019-10-14 17:51:24
 * @Last Modified by: hexuan.zhang@pingxx.com
 * @Last Modified time: 2019-10-15 22:55:16
 */

/**
 * 双重循环 时间复杂度：O(n^2)、空间复杂度：O11. Container With Most Water(1)
 *
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    const len = height.length;
    if (Object.is(len, 2)) return Math.min(height[0], height[1]);

    let result = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            result = Math.max(Math.abs(j - i) * Math.min(height[i], height[j]), result);
        }
    }

    return result;
};


/**
 * 使用双指针，值小的向值大的靠拢
 *
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let start = 0,
        end = height.length - 1;

    let result = 0;
    while (start < end) {
        result = Math.max((end - start) * Math.min(height[start], height[end]), result);

        height[start] > height[end] ? --end : ++start;
    }

    return result;
};

/*
 * @Description:
 * @Author: hexuan.zhang
 * @Date: 2019-10-14 17:51:24
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-10-14 18:55:55
 */

/**
 * 双重循环 时间复杂度：O(n^2)、空间复杂度：O(1)
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
    const start = 0,
        end = height.length;

    let result = 0;
    while (start < end) {
        result = Math.max((end - start) * Math.min(height[start], height[end]), result);

        height[start] > height[end] ? ++end : ++start;
    }

    return result;
};

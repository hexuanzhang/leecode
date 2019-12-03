/*
 * @Description: 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符
 * @Address: https://leetcode.com/problems/divide-two-integers/ | https://leetcode-cn.com/problems/divide-two-integers/
 * @Author: hexuan.zhang
 * @Date: 2019-12-03 10:58:48
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-12-03 16:48:09
 */

/**
 * 思路：
 *  1. 将除法转变为减肥，即 dividend / divisor 转换为 dividend - divisor，直到差为非正数为止；
 *     但这种方式，碰到被除数比较大，除数比较小时会超时，如：2**30 / 1
 *  2. 为了避免超时，将除数进行扩大，
 *
 * 注意事项：
 *  1. Math.abs() 不能使用，因为题目限制只能存储 32 位有符号整数，范围为 [(-2)**31, 2**31 - 1]，对于 (-2)**31 来说，abs() 后悔溢出，不在指定范围内
 *  2. 需要留意除数在扩大过程中的越界及商的越界情况
 *
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = (dividend, divisor) => {
    const [MIN_VALUE, MAX_VALUE] = [Math.pow(-2, 31), Math.pow(2, 31) - 1]; // 范围限制

    let quotient = 0;

    // 被除数和除数符号是否一致，一致则为 0，不一致则为 1
    const sign = (dividend > 0) ^ (divisor > 0);

    // 为避免使用 Math.abs() 溢出，将被除数和除数均转换为负数
    dividend = dividend > 0 ? -dividend : dividend;
    divisor = divisor > 0 ? -divisor : divisor;

    while (dividend <= divisor) {
        let _divisor = divisor,
            _quotient = -1;

        while (dividend <= (_divisor << 1) && (_divisor << 1) < 0) { // 扩大除数
            // 防止扩大倍数后越界
            if ((_divisor << 1) >= 0 || (_divisor << 1) <= MIN_VALUE) break;

            _divisor = _divisor << 1;
            _quotient = _quotient << 1;
        }

        dividend -= _divisor;
        quotient += _quotient;
    }

    if (!sign) { // 被除数与除数符号一致，需要将商转变为正数
        quotient = - quotient;

        // 商溢出时，返回 MAX_VALUE
        if (quotient > MAX_VALUE) return MAX_VALUE;
    }

    return quotient;
};
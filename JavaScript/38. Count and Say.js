/*
 * @Description: 给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项
 * @Address: https://leetcode.com/problems/count-and-say/ | https://leetcode-cn.com/problems/count-and-say/
 * @Author: hexuan.zhang
 * @Date: yyyy-03-dd 15:21:43
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: yyyy-03-dd 15:21:43
 */

const countAndSay = (n) => {
    let num = '1';

    for (let i = 2; i <= n; i++) {
        let statisticalResult = [];

        let numStr = `${num}`,
            currentNum = ''; // 当前统  计的数字

        for (let j = 0; j < numStr.length; j++) {
            if (Object.is(currentNum, numStr[j])) { // 如果当前数字与前一个一致，则个数加一
                let numInfo = statisticalResult[statisticalResult.length - 1]; // 当前数字的统计信息
                statisticalResult[statisticalResult.length - 1] = [currentNum, numInfo[1] + 1];
            } else { // 如果相邻数字前后不一样，则开始统计新数字的个数
                currentNum = numStr[j];
                statisticalResult[statisticalResult.length] = [currentNum, 1];
            }
        }

        num = statisticalResult.reduce((prev, current) => `${prev}${current[1]}${current[0]}`, '');
    }

    return num;
}

const countAndSay = (n) => {
    let num = '1';

    for (let i = 0; i < n; i++) {
        // 正则回溯
        num = num.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`);
    }

    return num;
}
/*
 * @Description: 合并 k 个排序链表，返回合并后的排序链表
 * @Address: https://leetcode.com/problems/merge-k-sorted-lists/ | https://leetcode-cn.com/problems/merge-k-sorted-lists/
 * @Author: hexuan.zhang
 * @Date: 2019-11-29 14:03:40
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-11-29 15:56:19
 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
 * 思路：这题是在 21 题的基础上进行扩展的，方法有以下几种
 *  1. 对数组进行遍历，然后进行两两合并
 *  2. 借用归并排序的思想，对数组进行归并合并
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
    if (lists.length <= 1) return lists[0] || null;

    return mergeLists(0, lists.length - 1, lists);
}

/**
 *  对 list 数组中的元素 [startIndex, endIndex] 进行归并合并
 *
 * @param {number} startIndex
 * @param {number} endIndex
 * @param {any[]} list
 */
function mergeLists(startIndex, endIndex, list) {
    if (startIndex >= endIndex) return list[endIndex];

    const middleIndex = Math.floor((endIndex - startIndex) / 2);

    const startNode = mergeLists(startIndex, startIndex + middleIndex, list);
    const endNode = mergeLists(startIndex + middleIndex + 1, endIndex, list);

    return mergeTwoLists(startNode, endNode);
}

/**
 * 思路：采用递归的方式实现
 *  1. 如果 l1.val < l2.val，那么可以将问题转换为将 l1.next 与 l2 合并；反之，
 *      如果 l2.val < l1.val，那么将问题转换为 12.next 与 l1 合并
 *  2. 递归的结束条件是 l1 或 l2 为空
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
    let dummyNode = new ListNode('');

    const EMPTY = [null, undefined];
    if (EMPTY.includes(l1)) return l2;
    if (EMPTY.includes(l2)) return l1;

    if (l1.val < l2.val) {
        dummyNode.val = l1.val;
        dummyNode.next = mergeTwoLists(l1.next, l2);
    } else {
        dummyNode.val = l2.val;
        dummyNode.next = mergeTwoLists(l1, l2.next);
    }

    return dummyNode;
}
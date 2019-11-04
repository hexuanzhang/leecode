/*
 * @Description: 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点
 * @Address: https://leetcode.com/problems/remove-nth-node-from-end-of-list/ | https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * @Author: hexuan.zhang
 * @Date: 2019-11-02 21:47:39
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-11-04 11:55:59
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 思路：删除倒数第 n 个节点需要将倒数第 n+1 个节点的 next 指向倒数第 n-1 个节点
 *  1. 获取节点数量
 *  2. 遍历节点，将指针指向倒数第 n+1 个节点
 *  3. 删除倒数第 n 个节点
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    const dummyNode = new ListNode('');
    dummyNode.next = head;

    // 统计节点数量
    let count = 0,
        firstNode = dummyNode.next;
    while (!Object.is(firstNode, null)) {
        count++;
        firstNode = firstNode.next;
    }

    count -= n;
    firstNode = dummyNode;
    while (count > 0) { // 遍历节点，让 fisrtNode 指向倒数第 n+1 个节点
        firstNode = firstNode.next;
        count--;
    }
    // 删除倒数第 n 个节点
    firstNode.next = firstNode.next.next;

    return dummyNode.next;
};

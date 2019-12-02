/*
 * @Description: 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表
 * @Address: https://leetcode.com/problems/swap-nodes-in-pairs/ | https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * @Author: hexuan.zhang
 * @Date: 2019-11-29 15:58:45
 * @Last Modified by: hexuan.zhang
 * @Last Modified time: 2019-12-02 10:19:49
 */

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
 * 思路：建立空节点作为链表的表头，遍历链表进行两两交换，交换过程需要注意以下几点：
 *  1. 只有一个节点时无需交换
 *  2. 节点交换时需要注意同时修改父节点的 next
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
    // 只有一个节点，则直接返回该节点
    if ((!head) || Object.is(head.next, null)) return head;

    const nodes = [];
    while (!Object.is(head, null)) {
        nodes.push(head);
        head = head.next;
    }

    for (let i = 0; i < nodes.length; i += 2) {
        swap(i, nodes);
    }

    return nodes[0];
};

/**
 * 交换节点
 *
 * @param {number} startNodeIndex 待交换节点的起始位置
 * @param {ListNode[]} nodes 所有节点集合
 */
const swap = (startNodeIndex, nodes) => {
    let parentNode = nodes[startNodeIndex - 1] || null,
        startNode = nodes[startNodeIndex],
        endNode = nodes[startNodeIndex + 1] || null;

    // endNode 不存在时，表明只剩下一个节点，无需交换
    if (!endNode) return;

    // 交互节点的关联性
    startNode.next = endNode.next;
    endNode.next = startNode;
    parentNode && (parentNode.next = endNode);

    // 交互节点位置
    [nodes[startNodeIndex], nodes[startNodeIndex + 1]] = [nodes[startNodeIndex + 1], nodes[startNodeIndex]];
}
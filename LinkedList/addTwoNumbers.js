/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let curr = 0;
    let newNode = new ListNode();
    const res = newNode;
    while(l1 || l2 || curr) {
        let sum = curr;
        if(l1 || l2) {
            sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + sum;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next:  null;
        }
        if(sum >= 10) {
            curr = 1;
            sum = sum - 10;
        } else {
            curr = 0;
        }

        newNode.val = sum;
        newNode.next = (l1 || l2 || curr) ? new ListNode() : null;
        newNode = newNode.next;
    }
    
    return res;
};

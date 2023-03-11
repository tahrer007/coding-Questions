//83. Remove Duplicates from Sorted List

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    if (!this.head) {
      this.head = new ListNode(val);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(val);
    }
  }

  removeDublicate(head) {}
}
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const deleteDuplicates = function (head) {
  let current = head; 
  let modifiedHead = head;
  while (current && current.next) {
    let nextNode = current.next;

    if (nextNode.val == current.val) {
   current.next = nextNode.next;
    } else {
      current = current.next;
    }
  }

  return modifiedHead;
};
let list = new LinkedList();
list.add(1);
list.add(2);
list.add(2);
list.add(3);
//console.log(list);
console.log(deleteDuplicates(list));

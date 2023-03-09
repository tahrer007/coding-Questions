//141. Linked List Cycle
//two pointers  fast & slow 

var hasCycle = function (head) {
  let current = head;
  let index = 0;
  while (current) {
    if (current.next) current = current.next;
    else {
      return current.pos >= 0 || current.pos <= index;
    }
    index++;
  }

  return false;
};

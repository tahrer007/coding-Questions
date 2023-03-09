class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // add(element)
  add(element) {
    const node = new ListNode(element);

    if (this.head) {
      let current = this.head;
      while (current.next) {
        //itreate to the end of the lest
        current = current.next;
      }
      current.next = node;
    } else {
      this.head = node;
    }

    this.size++;
  }

  // insertAt(element, location)
  insertAtIndex(element, index) {
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");
    let count = 0;
    let node = new ListNode(element);
    if (!index) {
      node.next = this.head;
      this.head = node;
    } else {
      let before = this.head;
      while (count < index - 1) {
        before = before.next;
        count++;
      }
      let temp = before.next;
      before.next = node;
      node.next = temp;
    }
    this.size++;
  }
  // removeFrom(location)
  removeAtIndex(index) {
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");
    let count = 0;
    if (!index) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      while (count < index - 1) {
        prev = prev.next;
        count++;
      }
      let nodeToRemove = prev.next;
      let after = nodeToRemove.next;
      prev.next = after;
    }
    this.size--;
  }
  // removeElement(element)
  removeElement(value) {
    let current = this.head;
    let prev ;
    while (current != null) {
      if (current.element === value) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      } else {
        prev = current;
        current = current.next;
      }
    }

    return -1;
  }
//indexOf(element)  
indexOf(value) {

    let current = this.head ; 
    let count = 0 ; 
    while (current){
            if(current.element === value ) return count ; 
            count++ ; 
            current = current.next ; 
    }

    return -1 ;
}
  getSize() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
    //other way  return this.size 
  }

  isEmpty()
  {
      return this.size == 0;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  getFirst() {
    return this.head;
  }


  printList(){
    let current = this.head ; 
    let str = "" ; 

    while (current){

        str+=  current.element + " " ; 
        current= current.next ; 
    }

    return str ; 

  }
 
}
class ListNode {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

let list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
console.log(list);
console.log(list.indexOf(10));
console.log(list.indexOf(60));
console.log(list.isEmpty());
console.log(list.printList());

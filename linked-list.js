/** Node: node for a singly linked list. */

class Node {
  constructor(val, next=null ) {
    this.val = val;
    this.next = next;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

   _get(idx) {
    let current = this.head;
    let tracker = 0;

    while (current !== null && tracker != idx) {
      tracker += 1;
      current = current.next;
    }

    return current;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length ++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.push(newNode)
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length ++
  }

  /** pop(): return & remove last item. */

  pop() {
    
  }

  /** shift(): return & remove first item. */

  shift() {
    this.head = this.head.next
    return this.head
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    const node = this._get(idx)
    if (idx >= this.length || idx < 0 ){
      throw new Error("Invalid index.")
    }  else {
      return node.val
    }
    
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let previous = _get(idx - 1)
    let next = previous.next;
    previous.next = val
    val.next = next

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
      if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    // get the one before it
    let prev = this._get(idx - 1);

    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
       if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    // special case: remove first item

    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    let prev = this._get(idx - 1);

    // special case: remove tail

    if (idx === this.length - 1) {
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }

    // normal case: remove in middle

    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let current = this.head
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length
  }
}

module.exports = LinkedList;

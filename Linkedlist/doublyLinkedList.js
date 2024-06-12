class Node {
    constructor(data, next = null, prev = null) {
        this.data = data
        this.next = next
        this.prev = prev
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
}

DoublyLinkedList.prototype.insertAtStart = function (data) {
    const newNode = new Node(data, this.head, null)

    if (this.head !== null) {
         this.head.prev = newNode
    }
    this.head = newNode

    if (this.tail === null) {
        this.tail = newNode
    }
    
}

DoublyLinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data, null, this.tail)
    
    if (this.tail !== null) {
        this.tail.next = newNode
    }
    this.tail = newNode

    if (this.head === null) {
        this.head = newNode      
    }

}

DoublyLinkedList.prototype.insertAtAnyPlace = function (data, prevNode) {

    if (!this.head) {
        return
    }

    const newNode = new Node(data, prevNode.next, prevNode)
    
    if (prevNode.next !== null) {
        prev.next.prev = newNode
    } 

    prev.next = newNode

    if (prevNode.next === null) {
        this.tail = newNode
    }

}

DoublyLinkedList.prototype.DeleteFirst = function () {

    if (!this.head) {
        return
    }
    
    if (this.head === this.tail) {
        this.head = null
        this.tail = null
    } else {
        this.head = this.head.next
        this.head.prev = null
    }

}


DoublyLinkedList.prototype.DeleteLast = function () {
    if (!this.tail) {
        return
    }

    if (this.head === this.tail) {
        this.head = null
        this.tail = null
    }else {
        this.tail = this.tail.prev
        this.tail.next = null
    }
}

DoublyLinkedList.prototype.reverse = function () {
    let current = this.head
    let temp = null
    while (current) {
        temp = current.prev
        current.prev = current.next
        current.next = temp
        current = current.prev
    }
    if (temp != null) {
    this.tail = this.head
    this.head = temp.prev
  }
}

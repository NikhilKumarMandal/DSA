class Node{
    constructor(data,next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
}

LinkedList.prototype.addDataAtHead = function (data) {
    const newNode = new Node(data)
    this.head = newNode
}

LinkedList.prototype.addDatainTheEnd = function (data) {
    const newNode = new Node(data)
    if (!this.head) {
    this.head = newNode
    } 
    
    let last = this.head;
    if (last.next) {
        last = last.next   
    }

    last.next =  newNode

}

LinkedList.prototype.addDataAtAnyGivenPoint = function (prevNode, data) {
    
    if (!prevNode) {
        console.log("PrevNode is empty");
        return
    }

    const newNode = new Node(data, prevNode.next)
    
    prevNode.next = newNode
    
}

LinkedList.prototype.Deletehead = function () {
    if (!this.head) {
        console.log("Head is empty");
        return;
    }
    if (!this.head.next) {
        this.head = null
        return
    }

    this.head = this.head.next;
}

LinkedList.prototype.DeleteEnd = function () {
    if (!this.head) {
        console.log("Head is empty");
        return;
    }
    if (!this.head.next) {
        this.head = null
        return
    }
    secondLast = this.head 
    
    while (secondLast.next.next) {
        secondLast = secondLast.next
    }

    secondLast.next = null
}
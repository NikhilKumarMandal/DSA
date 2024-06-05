class Queue{
    constructor() {
        this.queue = []
    }

    enqueue(data) {
        this.queue.push(data)
    }
    dequeue() {
        this.queue.shift()
    }
    peek() {
        return this.queue[0]
    }
    isEmpty() {
        return this.queue.length === 0
    }
    size() {
        return this.queue.length
    }
    clear() {
        return this.queue = []
    }
    contains(element) {
        return this.queue.includes(element)
    }
    reverse() {
        return this.queue.reverse()
    }
    peintQueue() {
        let str = '';
        for (let i = 0; i < this.queue.length; i++) {
            str += this.queue[i] + '\n' 
        }
        return str
    }
}

//usage Example

let myQueue = new Queue()
myQueue.enqueue(3)
myQueue.enqueue(9)
myQueue.enqueue(1)
myQueue.enqueue(4)
myQueue.enqueue(5)
myQueue.enqueue(6)
console.log(myQueue.peintQueue());
console.log(myQueue.peek());
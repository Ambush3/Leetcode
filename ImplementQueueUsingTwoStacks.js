var MyQueue = function () {
    // Initialize two stacks
    this.stack1 = [];
    this.stack2 = [];
};

MyQueue.prototype.push = function (x) {
    // Push the element onto stack1
    this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
    // If stack2 is empty, move elements from stack1 to stack2
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }

    // Pop the top element from stack2
    return this.stack2.pop();
};

MyQueue.prototype.peek = function () {
    // If stack2 is empty, move elements from stack1 to stack2
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
    }

    // Return the top element from stack2
    return this.stack2[this.stack2.length - 1];
};

MyQueue.prototype.empty = function () {
    // The queue is empty if both stacks are empty
    return this.stack1.length === 0 && this.stack2.length === 0;
};



// This implementation works by using stack1 to store the elements in a FIFO manner, and stack2 to temporarily store elements in a LIFO manner when needed.When an element is added to the queue using the push function, it is pushed onto stack1.When an element is removed from the queue using the pop function, it is popped from stack2 if stack2 is not empty.If stack2 is empty, the elements in stack1 are moved to stack2 in reverse order, so that the first element added to stack1 is at the top of stack2, and can be popped first.This ensures that the elements are removed from the queue in a FIFO manner.The peek function works in a similar way, by returning the top element of stack2 if stack2 is not empty, or moving the elements from stack1 to stack2 and returning the top element of stack2 if stack2 is empty.The empty function simply checks if both stacks are empty.

// This implementation has a time complexity of O(1) for the push and empty functions, and a time complexity of O(n) for the pop and peek functions, where n is the number of elements in the queue.The space complexity is O(n), as the two stacks may store up to n elements in total.
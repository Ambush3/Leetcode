var Node = function (val) {
    this.val = val
    this.next = null
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.head = null
    this.size = 0
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size || this.head === null) {
        return -1
    }

    let curr = this.head
    while (index--) {
        curr = curr.next
    }

    return curr.val
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new Node(val)
    node.next = this.head
    this.head = node
    this.size++
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    if (this.head === null) {
        this.addAtHead(val)
        return
    }

    const node = new Node(val)
    let curr = this.head
    while (curr.next !== null) {
        curr = curr.next
    }
    curr.next = node
    this.size++
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index === 0) {
        this.addAtHead(val)
        return
    }
    if (index === this.size) {
        this.addAtTail(val)
        return
    }
    if (index < 0 || index > this.size) {
        return
    }

    const node = new Node(val)
    let curr = this.head
    while (index - 1) {
        curr = curr.next
        index--
    }
    node.next = curr.next
    curr.next = node
    this.size++
}

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) {
        return
    }

    let curr = this.head
    if (index === 0) {
        this.head = curr.next
    } else {
        while (index - 1) {
            curr = curr.next
            index--
        }
        curr.next = curr.next.next
    }
    this.size--
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
const methods = [
    "addAtHead",
    "addAtTail",
    "addAtIndex",
    "get",
    "deleteAtIndex",
    "get",
]
const params = [[1], [3], [1, 2], [1], [1], [1]]
var obj = new MyLinkedList()

for (let i = 0; i < methods.length; i++) {
    console.log(methods[i], params[i])
    console.log(obj[methods[i]].apply(obj, params[i]))

    const arr = []
    let curr = obj.head
    while (curr) {
        arr.push(curr.val)
        curr = curr.next
    }
    console.log("//", arr)
    console.log()
}







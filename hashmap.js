class node {
    constructor() {
        this.key = null
        this.value = null
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    prepend(key, value) {
        if (this.head === null) {
            const newHead = new node()
            newHead.key = key
            newHead.value = value
            newHead.next = null
            this.head = newHead
        } else {
            const tmp = new node()
            tmp = this.head
            const newHead = new node()
            newHead.key = key
            newHead.value = value
            newHead.next = tmp.next
            this.head = newHead
        }
        return this.head
    }

    remove(key) {
        if (this.head.key === key) {
            if (this.head.next) {
                this.head.next = this.head.next.next
            } else {
                this.head = null 
            }
        } else {
            let p = new node()
            p = this.head 
            while (p !== null) {
                if (p.next.key === key) {
                    p.next = p.next.next
                }
                p = p.next
            }
        }
    }
}

class HashMap {
    constructor () {
        this.capacity = 16
        this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i)
        }
        return hashCode % this.capacity;
    }

    set(key, value) {
        const hashKey = this.hash(key)
        let p = new node()
        p = this.buckets[hashKey].head
        if (this.buckets[hashKey].head === null) {
            this.buckets[hashKey].prepend(key, value)
        } else if (this.has(key)) {
            while (p !== null) {
                if (p.key === key) {
                    p.value = value
                    return
                }
                p = p.next
            }
        } else {
            while (p.next !== null) {
                p = p.next
            }
            let tail = new node()
            tail.key = key
            tail.value = value
            tail.next = null
            p.next = tail
        }
    }

    get(key) {
        const hashKey = this.hash(key)
        let p = new node()
        p = this.buckets[hashKey].head
        while (p !== null) {
            if (p.key === key) {
                return p.value
            }
            p = p.next
        }
    }
    
    has(key) {
        const hashKey = this.hash(key)
        if (this.buckets[hashKey].head === null) {
            return false
        } else {
            let p = new node()
            p = this.buckets[hashKey].head
            while (p !== null) {
                if (p.key = key) {
                    return true
                }
            }
            return false
        }
    }

    remove(key) {
        const hashKey = this.hash(key)
        if (this.buckets[hashKey].head === null) {
            return false
        } else {
            this.buckets[hashKey].remove(key)
            return true
        }
    }

    length() {
        let size = 0
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                let p = new node()
                p = this.buckets[i].head
                while (p !== null) {
                    size++
                    p = p.next
                }
            }
        }
        return size
    }

    clear() {
        this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());
    }

    keys() {
        let res = []
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i].head !== null) {
                let p = new node()
                p = this.buckets[i].head
                while (p !== null) {
                    res.push(p.key)
                    p = p.next
                }
            }
        }
        return res
    }

    values() {
        let res = []
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i].head !== null) {
                let p = new node()
                p = this.buckets[i].head
                while (p !== null) {
                    res.push(p.value)
                    p = p.next
                }
            }
        }
        return res
    }

    entries() {
        let res = []
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i].head !== null) {
                let p = new node()
                p = this.buckets[i].head
                while (p !== null) {
                    let keyValuePair = []
                    keyValuePair.push(p.key)
                    keyValuePair.push(p.value)
                    res.push(keyValuePair)
                    p = p.next
                }
            }
        }
        return res
    }
}

module.exports = HashMap;

const HashMap = require('./hashmap.js')

let test = new HashMap

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.buckets)

/*[
  LinkedList { head: null },
  LinkedList {
    head: node { key: 'elephant', value: 'gray', next: null }
  },
  LinkedList { head: null },
  LinkedList {
    head: node { key: 'carrot', value: 'orange', next: null }
  },
  LinkedList { head: node { key: 'frog', value: 'green', next: null } },
  LinkedList {
    head: node { key: 'banana', value: 'yellow', next: null }
  },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: node { key: 'apple', value: 'red', next: null } },
  LinkedList { head: node { key: 'hat', value: 'black', next: null } },
  LinkedList {
    head: node { key: 'lion', value: 'golden', next: null }
  },
  LinkedList {
    head: node { key: 'ice cream', value: 'white', next: null }
  },
  LinkedList {
    head: node { key: 'jacket', value: 'blue', next: null }
  },
  LinkedList { head: node { key: 'kite', value: 'pink', next: null } }
] */

console.log(test.get('apple')) //red
console.log(test.has('banana')) //true

console.log(test.remove('hat')) //red
console.log(test.buckets)
/*[
  LinkedList { head: null },
  LinkedList {
    head: node { key: 'elephant', value: 'gray', next: null }
  },
  LinkedList { head: null },
  LinkedList {
    head: node { key: 'carrot', value: 'orange', next: null }
  },
  LinkedList { head: node { key: 'frog', value: 'green', next: null } },
  LinkedList {
    head: node { key: 'banana', value: 'yellow', next: null }
  },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: node { key: 'apple', value: 'red', next: null } },
  LinkedList { head: null },
  LinkedList {
    head: node { key: 'lion', value: 'golden', next: null }
  },
  LinkedList {
    head: node { key: 'ice cream', value: 'white', next: null }
  },
  LinkedList {
    head: node { key: 'jacket', value: 'blue', next: null }
  },
  LinkedList { head: node { key: 'kite', value: 'pink', next: null } }
] */

console.log(test.length()) //9
console.log(test.keys())
/*[
  'elephant',  'carrot',
  'frog',      'banana',
  'apple',     'lion',
  'ice cream', 'jacket',
  'kite'
] */
console.log(test.values())
/*[
  'gray',  'orange',
  'green', 'yellow',
  'red',   'golden',
  'white', 'blue',
  'pink'
] */

console.log(test.entries())
/*[
  [ 'elephant', 'gray' ],
  [ 'carrot', 'orange' ],
  [ 'frog', 'green' ],
  [ 'banana', 'yellow' ],
  [ 'apple', 'red' ],
  [ 'lion', 'golden' ],
  [ 'ice cream', 'white' ],
  [ 'jacket', 'blue' ],
  [ 'kite', 'pink' ]
] */

console.log(test.clear())
console.log(test.buckets)
/*[
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null },
  LinkedList { head: null }
] */


// console.log(Array.apply(null, {length: 3}))// [ undefined, undefined, undefined ]
//
// console.log(Array.apply(null, {'0': 1, length: 3}))// [ 1, undefined, undefined ]
//
// console.log(Array.apply(null, {'2': 1, length: 3}))// [ undefined, undefined, 1 ]

function f(name) {
    this.name = name
}

console.log(Array.apply(null, {length: 5}).map(f.call, Number))//[0, 1, 2, 3, 4]，f可以是任何函数
console.log(Array.apply(null, {'0': 1, length: 5}).map(f.call, Number))//[0, 1, 2, 3, 4]，不管元素是什么都一样)
console.log(Array.apply(null, {length: 5}).map(f.call, Boolean))//[false, true, true, true, true])
console.log(Array.apply(null, {length: 5}).map(f.call, String))//["0", "1", "2", "3", "4"])
console.log(Array.apply(null, {length: 5}).map(eval.call, Object))//[ [Number: 0], [Number: 1], [Number: 2], [Number: 3], [Number: 4] ]

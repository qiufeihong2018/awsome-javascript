console.log(parseInt(1212, 10))// 1212

console.log(parseInt(123.3123, 10))// 123

console.log(parseInt(1111011, 2))// 123

console.log(parseInt(111, 38))// NaN

console.log(parseInt(111, 3))// 13

console.log(parseInt('1', 2, [1]))// 1

console.log(parseInt('1', 0, ['1', '2', '3']))// 1  0就相当于10进制

console.log(parseInt('2', 1, ['1', '2', '3']))// NaN   没有1进制

console.log(parseInt('3', 2, ['1', '2', '3']))// NaN   2进制是没有3的

//字符串转数字
console.log(+'1')//1
console.log("1" * 1)//1
console.log("1" | 0)//1
console.log("1" >> 0)//1
console.log("1" << 0)//1

// 生成一个10位随机字符串

let n = 10;
var str = 'qwertyuiopaaaasdfghjkmnbvcxz1235456789'
var res = ''
for (let i = 0; i < n; i++) {
    res += str[parseInt(Math.random() * (str.length + 1))]
}
console.log(res)//rkjhufinu3

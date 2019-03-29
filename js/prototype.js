// B.prototype是一个实例对象,那么c这个实例对象可以访问到A里面的name属性,如果name有值那么就赋值,否则就输出默认值.
function A(name) {
    this.name = name || 'hhh'
}

function B() {
}

B.prototype = new A()
const c = new B()
console.log(c)//A {}
console.log(c.name)//hhh


// B.prototype是一个函数对象,那么c这个实例对象不能访问到A的内部,看打印出来的c,可以看出是一个函数对象,那么就只能访问函数对象的name属性,即为他的函数名
function A(name) {
    this.name = name || 'hhh'
}

function B() {
}

B.prototype = A
const c = new B()
console.log(c)//Function {}
console.log(c.name)//A

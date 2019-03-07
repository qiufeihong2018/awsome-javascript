function f(...args) {
    console.log(args)//[ 1, 2, 3, 123, 434, 54, 65563566 ]
    console.log(args[2] + args[3] + args[4])//560
}

f(1, 2, 3, 123, 434, 54, 65563566)
// f(...args)=f(1, 2, 3, 123, 434, 54, 65563566)
// ...args叫做rest参数

let arr = [10, 145, 2, 455, 8, -456, 1536, 88, -54,]
const sortFun = (first, second) => first - second
arr.sort(sortFun)
console.log(arr)//[ -456, -54, 2, 8, 10, 88, 145, 455, 1536 ]
// sortFun()是一个函数,是sort排序的依据,<=0则不动,大于0则交换顺序

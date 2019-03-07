const myPromise = new Promise(function (resolve, reject) {
    if (Math.random() < 0.9) {
        return reject('bbb')
    }
    return resolve('aaa')

})

myPromise.then(res => {
    console.log('aaa', res)
}).catch(err => {
    console.log('bbb', err)
})
// promise解决回调地域!将异步逻辑包装在promise中,使用'then'处理成功的,'catch'处理异常的.


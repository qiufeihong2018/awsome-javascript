const myPromise = new Promise(function (resolve, reject) {
    if (Math.random() < 0.9) {
        return resolve('aaa')
    }
    return reject('bbb')
})

async function f() {
    const great = await myPromise
    console.log(great)
}

f()

// async-await 是promise的语法糖

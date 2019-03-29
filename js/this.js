const a = {
  name: 'aaa',
  greeting: function () {
    return this.name
  }
}

const b = {
  name: 'bbb',
  greeting: a.greeting
}

console.log(b.greeting())//bbb
console.log(a.greeting.call(b))//bbb
console.log(a.greeting.apply(b))//bbb
console.log(a.greeting.bind(b)())//bbb
const a = {
  name: 'aaa',
  greeting:  ()=> {
    return this.name
  }
}

const b = {
  name: 'bbb',
  greeting: a.greeting
}

console.log(b.greeting())//undefined
console.log(a.greeting.call(b))//undefined
console.log(a.greeting.apply(b))//undefined
console.log(a.greeting.bind(b)())//undefined

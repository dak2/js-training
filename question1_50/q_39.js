// 'sample'のような1つ以上の小英字にマッチした場合、配列['sample']が返るようにしてください。

const string = 'sample'
const regex = /^([a-z].+)/

console.log(string.match(regex))

// 配列
// const array = ['a1','a2','a3','a4','a5']
// の0〜2番目の要素をそれぞれ
// red, green, yellow
// に置き換えて配列にしてください。また実行した際の返り値を教えてください

const array = ['a1','a2','a3','a4','a5'];
const strings = ['red', 'green', 'yellow'];

console.log([...strings, ...array.splice(3,4)]);

// other
const arr = ['a1','a2','a3','a4','a5']
arr.splice(0,3, 'red', 'green','yellow');
console.log(arr)

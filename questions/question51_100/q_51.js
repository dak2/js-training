// 文字列fooをイテレーターを使い['f','o','o']となるようにしてください

// ans
// 1
'foo'.split('')

// 2
let results = []
for (let i = 0; i < 'foo'.length; i++) {
  results.push('foo'.charAt(i))
}

// 別解
let chars = [];
for (let n of 'foo'){
  chars.push(n);
}

// 再度挑戦
// 下記
// const obj = {
//  key: 'aa',
//  key2: 'bb'
// }
// の中のkeyとvalueを自身のプロパティのみ全て出力しなさい

const obj = {
  key: 'aa',
  key2: 'bb'
}

for(key in obj) {
  console.log(key, obj[key])
}
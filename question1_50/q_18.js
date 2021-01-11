// 浅いコピー(shallow copy)と深いコピー(deep copy)の違いを説明してください

// ## shallow copy
// シャローコピー(浅いコピー)はプリミティブ値(文字列、数値、真偽値、null、undefined、Symbol)をコピーするが、
// それ以外のオブジェクトは参照をコピーする。
// 参照がコピーされるということは、コピー元とコピー先でオブジェクトが共有される
// ## code
// const obj = { str: 'text', inner_obj: { str: 'text2', num: 10 }}
// const copiedObj = Object.assign({}, obj);
// obj.inner_obj.num = 88
// obj.inner_obj.num === copiedObj.inner_obj.num // -> true
// -> object内のプリミティブ以外のオブジェクトは参照をコピーしているので同じオブジェクトを参照している

// ## deep copy
// shallow copyのようにプリミティブ以外のオブジェクトを複製する際、
// 参照をコピーしないようにして同一オブジェクトを参照しないようにする
// ## code 
// // 引数の`obj`を浅く複製したオブジェクトを返す
// const shallowClone = (obj) => {
//   return Object.assign({}, obj);
// };
// // 引数の`obj`を深く複製したオブジェクトを返す
// function deepClone(obj) {
//   const newObj = shallowClone(obj);
//   // プロパティがオブジェクト型であるなら、再帰的に複製する
//   Object.keys(newObj)
//       .filter(k => typeof newObj[k] === "object")
//       .forEach(k => newObj[k] = deepClone(newObj[k]));
//   return newObj;
// }
// const obj = { 
//   level: 1,
//   nest: {
//       level: 2
//   }
// };
// const cloneObj = deepClone(obj);
// // `nest`オブジェクトも再帰的に複製されている
// console.log(cloneObj.nest === obj.nest); // => false
// 参考 https://jsprimer.net/basic/object/#copy
// 最初のPromiseオブジェクトがresolveされたら'I'という文字列を返し、
// 次のPromiseオブジェクトで文字列'am'を返し、
// 次のPromiseオブジェクトで'John'を返し、
// 最後のPromiseオブジェクトでそれらが連結された文字列を出力してください

const initPromise = new Promise(function(resolve){
  resolve('I')
})
const a = function(a){
  return a + 'am'
}
const b = function(b){
  console.log("bbbbbb", b)
  return b + 'John'
}
const c = function(c){
  console.log(c)
}
initPromise.then(a).then(b).then(c);

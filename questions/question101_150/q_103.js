// resolveに数値1を渡すコールバックを呼び出し、
// console出力され、続くthenメソッドで2を足した値を出力してください。

// 解答
const add = () => {
  return new Promise(resolve => {
    resolve(1)
  })
}

add().then(result => {
  console.log(result)
  console.log(result + 2)
})

// 答え
const promise1 = new Promise(function(resolve){
  resolve(1);
})

promise1.then(function(val){
  console.log(val);
  return val + 2;
}).then(function(val){
  console.log(val);
});

// 3つの非同期処理の完了を待って'done'を出力する関数を実装をしてください

// 解答
const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(1);
const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 5000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(console.log('done'))

// 答え
function f (name, time){
  const done =  new Promise(function(resolve){
    setTimeout(function(){
      console.log(name)
    resolve();
    }, time)
  });
  return done
};
const result = Promise.all([f('test1', 500),f('test2', 500),f('test3', 500)])
result.then(()=> console.log("done"))

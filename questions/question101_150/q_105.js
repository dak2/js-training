// Promiseを使って0.5秒後毎に文字列が出力される非同期処理を実装してください

// 解答

const outputString = (ms) => {
  return new Promise(function(resolve) {
    setInterval(resolve, ms)
  })
}

outputString(500).then(function() {
  console.log('test1')
}).then(function() {
  console.log('test2')
})

// -> resolveしたら全て同タイミングで文字列が出力される

// 答え
function func(name, ms){
  const result = new Promise(function(resolve){
    setTimeout(function(){
      console.log(name)
      resolve();
    }, ms)
  });
  return result
};

func('test1', 500)
  .then(() => func('test2', 500))
  .then(() => func('test3', 500))
  .then(() => func('test4', 500))

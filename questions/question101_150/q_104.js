// 下記の処理をPromiseオブジェクトを使って書き換えてください

function say(callback, ms) {
  setTimeout(callback, ms);
}

say(function(){
  console.log('test')
}, 1000);


// 解答

function say(ms){
  return new Promise(function(resolve){
    setTimeout(resolve, ms);
  });
}

say(1000).then(function(){
  console.log('test');
})

// ユーザー定義関数funを作り、実行時の引数として、オブジェクトkeyにa,b。値をそれぞれ1,4として加算して返してください

// 解答
let obj = {
  a: 1,
  b: 4
}

function fun(obj) {
  let objKeys = Object.keys(obj)
  return obj[objKeys[0]] + obj[objKeys[1]]
}

// 答え
function fun({a, b}){
  return a + b;
}
fun({a: 1, b: 4});//5
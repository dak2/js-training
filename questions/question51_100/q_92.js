function list (){
  return Array.prototype.slice.call(arguments);
}
list(2,3,4);

// 上記list関数は返り値が[2,3,4]になるが、下記のように修正してください。
// インデックス0番目は必ず数値1がsetされ、その後は呼び出し元の値が続く配列を返す関数にしてください。

// 解答
function list (){
  let arr = Array.prototype.slice.call(arguments)
  arr.unshift(1)
  return arr
}
list(2,3,4);

// 答え
// -> bind() で、あらかじめ引数が指定された関数を生成する
// 参考 : https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#partially_applied_functions

function list (){
  return Array.prototype.slice.call(arguments)
}

// 第一引数が設定済みの関数を生成
// 最初のindexの値を設定する
let func = list.bind(null, 1)

func(2,3,4)
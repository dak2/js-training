// 再度挑戦
// fun(1,2,3)を実行した際に引数をまとめて1つの配列で返す関数を定義しなさい
// 参考 : https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax#rest_syntax_parameters

const fun = (...arg) => {
  return arg;
}

console.log(fun(1, 2, 3));

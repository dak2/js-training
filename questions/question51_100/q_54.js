// foo(1, 2, 3, 4, 5, 6)を実行したら1をfirst変数に代入、2をsecond変数に代入、残りが配列arrayの要素になるような fooを定義してください

// ans
function foo() {
  const [first, second, ...array] = arguments
  console.log(first, second, array)
}

foo(1, 2, 3, 4, 5, 6)

// 別解
function foo(first, second, ...rest){
  console.log('first', first);
  console.log('second', second);
  console.log('rest', rest);
}
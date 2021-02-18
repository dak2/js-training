// f()を実行すると6が返ってくる関数fを実装してください。
// ただし関数fは引数にx,y,zを持ち、xはデフォルトで1、yはデフォルトで2、zはObjectDestructuringとしてkeyとvalueにzを持ちデフォルトでzの値は3とする


// 解答 : 途中
// objectのzプロパティを書き換えようとしたが、それだとデフォルト値ではないことになるので作業を中断
const object = {
  z: "z"
}

function f(x = 1, y = 2, { z } = object ) {
  return x + y + z
}

// 答え
function f([x, y] = [1,2], {z: z} = {z: 3}){
  return x + y + z;
}
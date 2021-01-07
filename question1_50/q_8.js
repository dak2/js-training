// 再度挑戦
// ['a', 'b', 'c'] 配列の中の全ての要素を結合し、1つの文字列として出力してください。

const arr = ['a', 'b', 'c'];

console.log(arr.join(''));

// other answer
let str = '';
const count = array.length;
for(var i= 0; i < count; i++){
  str += array[i];
}
console.log(str);
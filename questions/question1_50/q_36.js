// こちらは要素が2だったらループを抜けたいのだが期待どうり動かない 期待する出力 //0, 1

[0, 1, 2, 3, 4].forEach(function(val, i) {
  if (val === 2) {
    // how do we stop?
    break;
  }
  console.log(val);
});
// 0, 1, 3, 4
// 期待通りになるようにしてください

// use some
// trueになればtrueを返す
[0, 1, 2, 3, 4].some(function(val, i) {
  if (val === 2) {
    return true;
  }
  console.log(val); // your code
});
//0, 1

// use for
// breakでループから抜ける
const a = [0, 1, 2, 3, 4];
for (var i = 0; i < a.length; i++) {
  if (a[i] === 2) {
    break; // stop the loop
  }
  console.log(a[i]);
}
//0, 1

// forEachは全ての要素を実行する
// 途中で抜けることできない
// [1,1,'a','a']から重複している要素を省いた配列にしてください。
// 期待する結果 [1,'a']

// 解答
const ary = [1,1,'a','a']

let result = ary.filter(function(x, i, self) {
  return self.indexOf(x) === i;
});

// -> xは要素, iはindex, selfはレシーバのary
// self.indexOf(x)は要素の中で最初の要素のindexを返す
// そのため1が二つあっても最初の要素のindex0を返すのでindex0番目の1だけが抽出される
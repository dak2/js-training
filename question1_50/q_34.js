const ary = ['a', 'b', 'c', 'd', 'e']
// のインデックス2番目に'morita'という要素を加えなさい。
// 期待する結果['a', 'b','morita', 'c', 'd', 'e']

ary.splice(2, 1, 'morita')
console.log(ary)
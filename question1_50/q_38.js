const array = [['one', 'info@fa'],['two', 'send@fafa'],['three', 'hoso@fafa']]
// 二次元配列の'two'の値を取得してください

array[1][1]

array.filter(elm => elm[0] === 'two').flat()[1]

for(let elm of array) {
  if(elm[0] === 'two') {
    console.log(elm[1])
    break
  }
}

// 別解
const map = new Map(fafa);
// {"one" => "info@fa", "two" => "send@fafa", "three" => "hoso@fafa"}
map.get('two');

// ObjectとMapの違い
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps

// for of -> Objectのプロパティ名を繰り返す
// 配列の場合は、index
// Objetの場合は、key
const array = [1, 5, 9];
for(let name in array) {
  console.log(name); // => 0, 1, 2
}

// for in -> Objectのプロパティ値を繰り返す
// Objetの場合は、プロパティ値
const array = [1, 5, 9];
for(let name of array) {
  console.log(name); // => 1, 5, 9
}
// Iteratableからiteratorを取得、要素を出力して「要素がもうない意」の{value: undefined, done: true}を出力してください

const arr = ['ooo', 'eee'];

const iterator = arr[Symbol.iterator]();
console.log(iterator.next()); // { done: false, value: 'ooo'}
console.log(iterator.next()); // { done: false, value: 'eee' }
console.log(iterator.next()); //{ done: true, value: undefined }

// Iterable
// for..of ループで任意のオブジェクトを使用できるようにするための概念
// 配列や文字列などをfor..ofループで処理できるようになる

// 例
let range = {
  from: 1,
  to: 5
};

for (let num of range) {
  alert(num);
}

// -> Uncaught TypeError: range is not iterable

// to Iterable

let range = {
  from: 1,
  to: 5
};

const iterableRange = range[Symbol.iterator];

for (let num of iterableRange) {
  alert(num);
}
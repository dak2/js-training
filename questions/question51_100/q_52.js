// Iteratableからiteratorを取得、要素を出力して「要素がもうない意」の{value: undefined, done: true}を出力してください

const arr = ['ooo', 'eee'];

const iterator = arr[Symbol.iterator]();
console.log(iterator.next()); // { done: false, value: 'ooo'}
console.log(iterator.next()); // { done: false, value: 'eee' }
console.log(iterator.next()); //{ done: true, value: undefined }

// Iterable
// for..of ループで任意のオブジェクトを使用できるようにするための概念
// 配列や文字列などをfor..ofループで処理できるようになる
// [Symbol.iterator]() メソッドを実行すると イテレータ を返す 

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
// 参考 : https://ja.javascript.info/iterable#ref-72

let range = {
  from: 1,
  to: 5
};

// 1. for..of の呼び出しは、最初にこれを呼び出します
range[Symbol.iterator] = function() {

  // 2. ...これは iterator を返します:
  return {
    current: this.from,
    last: this.to,

    // 3. for..of ループにより、各繰り返しで next() が呼ばれます
    next() {
      // 4. オブジェクト {done:.., value :...} を返す必要があります
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// これで動作します!
for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}
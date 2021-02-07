// gen.next().valueを実行すると値が1づつ返ってくるようなGenerator関数を作り、1,2,3と出力してください

// 答え

function* infinite(){
  let index = 0;
  while(true)
    yield index++;
}

let gen = infinite();
console.log(gen.next().value)

// Generatorとは
// - 処理を抜け出したり、後から復帰したりすることができる関数
// - 値を繰り返し列挙できるのでIteratorと組み合わせられる
// - yieldを使って値を返す
// - next()を使って値を取り出す = { value: xx, done: false }

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator

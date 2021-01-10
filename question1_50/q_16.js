// 配列['おはよう','こんにちは','おやすみなさい']の要素がランダムに出力される関数を書いてください。
// (配列に要素が追加される事を仮定してたものにしてください)

const greetWords = ['おはよう','こんにちは','おやすみなさい'];

const randomGreet = (array) => {
  return array[Math.round(Math.random()*array.length)]
}

module.exports = randomGreet;
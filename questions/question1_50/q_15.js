// const array = ['a1','a2','a3','a4','a5']
// 上記配列全ての要素を"/"で結合した文字列を出力する関数
// さらにその文字列を'/'区切りで配列に直す関数を作成してください

const splitArray = (array) => {
  return array.join('/')
}

const toArray = (string) => {
  return string.split('/')
}

module.exports = { splitArray, toArray }

// const array = [0,0,0]の配列をインデックス1と2を7にした配列にしてください
// ただし、array[1] = 7 / array[2] = 7のようにindexを個別に指定した変更方法はなしとする
// expect : [0, 7, 7]

// 答え
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
const array = [0,0,0]

array.fill(7, 1)


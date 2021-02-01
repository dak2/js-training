let names = [['John', 'Michel', 'Mike'],['John', 'Michel', 'Mike']]
// 全てのaaにある多次元配列の全ての要素に文字列'san'を付け加えて1次元配列として出力してください

const appendString = (names) => {
  return names.flatMap(arr => {
    return arr.map(elm => {
      return elm = elm + 'san'
    })
  })
}

module.exports = appendString
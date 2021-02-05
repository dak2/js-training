let array = ['aa','bb','cc','dd','ff'];
// このような配列の要素'bb'の前に'ff'を移動させて['aa','ff','bb','cc','dd']このような配列を完成させてください

// 解答
const omitedArray = (array) => {
  let filteredArray = array.filter(elm => elm != 'ff')
  filteredArray.splice(1,0,'ff')
  return filteredArray
}

// 答え
array.splice(1,0,array.splice(4,1)[0])

module.exports = omitedArray
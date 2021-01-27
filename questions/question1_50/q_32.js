// const getSum = (a, b) => a + b
// このパラメーターのどちらかまたは両方渡ってこなかった場合Errorをスローすようにしてください
// 期待する結果 
// getSum(10) //throws b is not defined
// getSum(undefined, 10) //throws a is not defined

const getSum = (a, b) => {
  if (!a) {
    throw new Error("a is not defined")
  } else if (!b) {
    throw new Error("b is not defined")
  }
  return a + b
}


// 別解
const _err = function(message) {
  throw new Error(message);
}
const getSum2 = (a = _err('a is not defined'), b = _err('b is not defined'))=> a + b

module.exports = getSum
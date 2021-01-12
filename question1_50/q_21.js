// [20,100,3,35,0]「降順」にsortしてください
// ex. 期待する結果[100, 35, 20, 3, 0]

const numbers = [20,100,3,35,0]

const orderByDesc = (numbers) => {
  numbers.sort((a, b) => b - a)
  return numbers; 
}

module.exports = orderByDesc;

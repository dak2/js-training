const passed = [12, 5, 8, 130, 44]
// 配列の要素全てが10以上かどうかを評価してtrueかfalseを返してください。
// また10以上のものが一つでもあった場合trueを返してください。

const checkAllElm = (numbers) => {
  return numbers.every(num => num >= 10);
}

const checkAnyElm = (numbers) => {
  return numbers.some(num => num >= 10);
}

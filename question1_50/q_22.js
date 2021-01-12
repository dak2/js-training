// 文字列 '10'をNumber型にし、型判定し、数値かどうか評価後、文字列に変換してください

const number = Number('10')
console.log(typeof number)
// isNaN = Not A Number
console.log(isNaN(number));
const string = String(number)
console.log(string)

